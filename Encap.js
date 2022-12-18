class AnimalKingdom {
     constructor(){
        if (this.constuctor == AnimalKingdom){
            throw new error ("This Class can't be called")
        }
    }
        Arthropoda=butterfly
        Fish=shark
        Amphibia=frog
        Reptiles=tortoise
        AVES=bird
        Mammals=cat
    }

class fish extends AnimalKingdom{
  AreColdBlooded 
  HaveBackBone
  ClassFish
}

class butterfly extends AnimalKingdom{
  AreColdBlooded
  DonotHaveBackBone
  ClassArthropoda
} 

class frog extends AnimalKingdom{
  AreColdBlooded
  HaveBackBone
  ClassAmphibia
}

class tortoise extends AnimalKingdom{
  AreColdBlooded
  HaveBackBone
  ClassReptile
}

class bird extends AnimalKingdom{
  AreWarmBlooded
  HaveBackBone
  ClassAVES
}

class cat extends AnimalKingdom{
  AreWarmBlooded
  HaveBackBone
  ClassMammals
}