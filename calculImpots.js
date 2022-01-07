



module.exports = {

    salary: 0,

    takeSalary(salaire){

        this.salary = salaire;
        return salaire;
    },

    salaryFinal(impots){
        return this.takeSalary(this.salary) - impots;
    },

    checkNbPartsSalaire(salaire, nbParts) {

        this.takeSalary(salaire);

       
        if (nbParts === 1) {
            return this.checkTranche(salaire, nbParts);
        }
        if (nbParts > 1) {
            salaire = salaire / nbParts;
            return this.checkTranche(salaire, nbParts);
        }

    },

    checkTranche(salaire, nbParts) {

        if (salaire >= 0 && salaire <= 10064) {
            return this.nonImposable(salaire);
        }

        if (salaire >= 10065 && salaire <= 25659) {
            return this.calculPremiereTranche(salaire, nbParts);
        }

        if (salaire >= 25660 && salaire <= 73369) {
            return this.calculDeuxiemeTranche(salaire, nbParts);
        }

        if (salaire >= 73370 && salaire <= 157806) {
            return this.calculTroisiemeTranche(salaire, nbParts);
        }


    },

    nonImposable(salaire) {
        return {"salaire": salaire, "result": 0, "imposable": "Premiere Tranche", "montantTranche": 0, "tmi": "0%"}
    },

    calculPremiereTranche(salaire, nbParts) {

        var result = salaire - 10065;

        var montantTranche = (result * 11) / 100;

        result = montantTranche * nbParts;

        console.log(this.salary);

        return {"salaire": this.salaryFinal(result), "result": result, "imposable": "Deuxième Tranche", "montantTranche": montantTranche.toFixed(2), "tmi": "11%"};


    },

    calculDeuxiemeTranche(salaire, nbParts) {

        var result = salaire - 25660;

        var montantTranche = (result * 30) / 100;


        result = montantTranche + 1715.34;

        result = result * nbParts;

        return {"salaire": this.salaryFinal(result), "result": result, "imposable": "Troisième Tranche", "montantTranche": montantTranche.toFixed(2), "tmi": "30%"};

    },

    calculTroisiemeTranche(salaire, nbParts) {

        var result = salaire - 73370;

        var montantTranche = (result * 41) / 100;

        result = montantTranche + 1715.34 + 14312.7;

        result = result * nbParts;

        return {"salaire": this.salaryFinal(result), "result": result, "imposable": "Quatrième Tranche", "montantTranche": montantTranche.toFixed(2), "tmi": "41%"};

    }

}