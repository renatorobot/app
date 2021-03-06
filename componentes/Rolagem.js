import React, {useState} from 'react'
import {View, Text, ScrollView, RefreshControl} from 'react-native'


export default function(){

    const [atualizando, setAtualizando]=useState(false)

    function aoAtulizar(){
        setAtualizando(true)
        setTimeout(()=>{setAtualizando(false)}, 3000)
    }

    return (

        <View style={{flex:1}}>
            <ScrollView 

            style={{backgroundColor: "#333"}}
            refreshControl={
                <RefreshControl
                 refreshing={atualizando}
                 onRefresh={aoAtulizar}
                />
            }

            >
                <Text style={{color: "#eee"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi varius, vehicula mi a, feugiat purus. Donec faucibus, felis in fringilla consequat, magna velit luctus massa, molestie eleifend libero leo commodo augue. Maecenas fermentum gravida nulla eu eleifend. Duis metus diam, dictum vitae efficitur vel, vehicula eu ex. Sed arcu augue, tempor ut auctor ac, convallis id ipsum. Maecenas iaculis tellus justo, sit amet tincidunt nisl interdum eu. Curabitur eget mi nulla. Integer fringilla sapien a augue maximus, sed posuere justo dapibus. Sed nec orci porttitor, mollis leo ut, consectetur est. Cras eget lacus aliquam, suscipit magna porta, malesuada diam. Curabitur venenatis rutrum odio a cursus. Sed sollicitudin, ante a scelerisque fermentum, ligula nunc malesuada tortor, ut lacinia leo est eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi varius, vehicula mi a, feugiat purus. Donec faucibus, felis in fringilla consequat, magna velit luctus massa, molestie eleifend libero leo commodo augue. Maecenas fermentum gravida nulla eu eleifend. Duis metus diam, dictum vitae efficitur vel, vehicula eu ex. Sed arcu augue, tempor ut auctor ac, convallis id ipsum. Maecenas iaculis tellus justo, sit amet tincidunt nisl interdum eu. Curabitur eget mi nulla. Integer fringilla sapien a augue maximus, sed posuere justo dapibus. Sed nec orci porttitor, mollis leo ut, consectetur est. Cras eget lacus aliquam, suscipit magna porta, malesuada diam. Curabitur venenatis rutrum odio a cursus. Sed sollicitudin, ante a scelerisque fermentum, ligula nunc malesuada tortor, ut lacinia leo est eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi varius, vehicula mi a, feugiat purus. Donec faucibus, felis in fringilla consequat, magna velit luctus massa, molestie eleifend libero leo commodo augue. Maecenas fermentum gravida nulla eu eleifend. Duis metus diam, dictum vitae efficitur vel, vehicula eu ex. Sed arcu augue, tempor ut auctor ac, convallis id ipsum. Maecenas iaculis tellus justo, sit amet tincidunt nisl interdum eu. Curabitur eget mi nulla. Integer fringilla sapien a augue maximus, sed posuere justo dapibus. Sed nec orci porttitor, mollis leo ut, consectetur est. Cras eget lacus aliquam, suscipit magna porta, malesuada diam. Curabitur venenatis rutrum odio a cursus. Sed sollicitudin, ante a scelerisque fermentum, ligula nunc malesuada tortor, ut lacinia leo est eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi varius, vehicula mi a, feugiat purus. Donec faucibus, felis in fringilla consequat, magna velit luctus massa, molestie eleifend libero leo commodo augue. Maecenas fermentum gravida nulla eu eleifend. Duis metus diam, dictum vitae efficitur vel, vehicula eu ex. Sed arcu augue, tempor ut auctor ac, convallis id ipsum. Maecenas iaculis tellus justo, sit amet tincidunt nisl interdum eu. Curabitur eget mi nulla. Integer fringilla sapien a augue maximus, sed posuere justo dapibus. Sed nec orci porttitor, mollis leo ut, consectetur est. Cras eget lacus aliquam, suscipit magna porta, malesuada diam. Curabitur venenatis rutrum odio a cursus. Sed sollicitudin, ante a scelerisque fermentum, ligula nunc malesuada tortor, ut lacinia leo est eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi varius, vehicula mi a, feugiat purus. Donec faucibus, felis in fringilla consequat, magna velit luctus massa, molestie eleifend libero leo commodo augue. Maecenas fermentum gravida nulla eu eleifend. Duis metus diam, dictum vitae efficitur vel, vehicula eu ex. Sed arcu augue, tempor ut auctor ac, convallis id ipsum. Maecenas iaculis tellus justo, sit amet tincidunt nisl interdum eu. Curabitur eget mi nulla. Integer fringilla sapien a augue maximus, sed posuere justo dapibus. Sed nec orci porttitor, mollis leo ut, consectetur est. Cras eget lacus aliquam, suscipit magna porta, malesuada diam. Curabitur venenatis rutrum odio a cursus. Sed sollicitudin, ante a scelerisque fermentum, ligula nunc malesuada tortor, ut lacinia leo est eu ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id nisi varius, vehicula mi a, feugiat purus. Donec faucibus, felis in fringilla consequat, magna velit luctus massa, molestie eleifend libero leo commodo augue. Maecenas fermentum gravida nulla eu eleifend. Duis metus diam, dictum vitae efficitur vel, vehicula eu ex. Sed arcu augue, tempor ut auctor ac, convallis id ipsum. Maecenas iaculis tellus justo, sit amet tincidunt nisl interdum eu. Curabitur eget mi nulla. Integer fringilla sapien a augue maximus, sed posuere justo dapibus. Sed nec orci porttitor, mollis leo ut, consectetur est. Cras eget lacus aliquam, suscipit magna porta, malesuada diam. Curabitur venenatis rutrum odio a cursus. Sed sollicitudin, ante a scelerisque fermentum, ligula nunc malesuada tortor, ut lacinia leo est eu ligula.
                </Text>
            </ScrollView>
        </View>

    )


}