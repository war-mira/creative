<template>
    <div class="card" :id="flat.id">
        <div class="profile">
            <div class="profile--main">
                <div class="profile--basic__container">
                    <div class="profile--header">
                        <h2 class="pr_10">{{this.flat.attributes.title}}</h2>
                        <span class="favorite--icon" @click="setFavorite(flat.id)" title="Добавить в Избранное">
                            <i class="far fa-thumbs-up"></i>
                        </span>
                    </div>
                    <div class="profile--info">
                        <div class="profile--type">Тип жилья: {{getType(this.flat.type)}}</div>
                        <div class="profile--info__row">Количество комнат: {{this.flat.attributes.rooms}}</div>
                        <div class="profile--info__location">
                            <div class="address">Адрес: 
                                {{this.flat.attributes.address.city}},
                                {{this.flat.attributes.address.street}},
                                {{this.flat.attributes.address.house}}
                            </div>
                            <div class="flat">Квартира: 
                                {{this.flat.attributes.address.room}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile--additional">
                <div class="profile--additional__details">
                    Площадь: {{this.flat.attributes.area}} <span>{{this.flat.attributes.unit}}</span>
                </div>
                <div class="profile--additional__relations">
                    <div class="relations--type">Представитель: {{getType(this.flat.relationships.type)}}</div>
                    <div class="relations--person">{{getFullStr(this.flat.relationships.attributes)}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "FlatItem",
    props:{
        flat: Object
    },
    data () {
        return {

        }
    },
    methods: {
        getType(type){
            const types = {
                'flat': 'Квартира',
                'agent': 'Агент'
            }
            return types[type]
        },
        getFullStr(obj){
            return `${obj.last_name} ${obj.first_name} ${obj.middle_name}`
            // let str = ''
            // for(let i in obj){
            //     str += `${obj[i]} `
            // }
            // return str
        },
        setFavorite(id){
            this.$store.dispatch('setFavorite', id);
        }
    }
}
</script>
<style lang="scss">
    .card{
        -webkit-box-shadow: 0 2px 20px rgba(43,46,56,.2);
        box-shadow: 0 2px 20px rgba(43,46,56,.2);
        border-radius: 6px;
        margin: 20px;
    }
    .profile{
        width: 100%;
        display: flex;
        align-items: baseline;
        text-align: left;
        justify-content: space-between;
        padding: 20px;
        flex-wrap: wrap;
        box-sizing: border-box;
        
        &--header{
            display: flex;
            align-items: center;
        }

        &--main, &--additional{
            width: 100%;
        }

        .favorite{
            background: #e6f5ee;

            &--icon{
                font-size: 20px;
                cursor: pointer;

                i{
                    &:hover{
                        color: #f9e029;
                    }
                }
            }
        }
        .pr_10{
            padding-right: 10px;;
        }
    }
    @media (min-width: 1024px){
        .profile{
            flex-wrap: nowrap;

            &--main{
            width: 60%;
            }
            &--additional{
                width: 40%;
            }
        }
    }
</style>