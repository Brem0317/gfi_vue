<template>

        <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="card">
                    <form>
            

                        <div class="card-body">
      
                            <div class="row">
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="customer_name" type="text" class="form-control " id="floatingInput" placeholder="Customer Name"  autocomplete="off">
                                        <label for="floatingInput">Customer Name</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="document_series_no" type="text" class="form-control" placeholder="Customer Name" readonly value="">
                                        <label for="floatingInput">Document Series Number</label>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="customer_date" type="date"  class="form-control " placeholder="Date" autocomplete="off">
                                        <label for="floatingInput">Date</label>
                                    </div> 
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="pallet_no" type="text"  class="form-control" placeholder="Pallet Number" autocomplete="off">
                                        <label for="floatingInput">Pallet Number</label>
                                    </div> 
                                </div>
                            </div>

                            <div class="row">
                            
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="wh_location" type="text"  class="form-control " id="floatingInput" placeholder="Customer Name">
                                        <label for="floatingInput">Warehouse Location</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="warehouse" type="text"  class="form-control" id="floatingInput" placeholder="Customer Name">
                                        <label for="floatingInput">Warehouse</label>
                                    </div>
                                </div>
                            </div>

                            <!--
                                Dynamic Fields Begin
                            -->
                            <table class="table mt-4 mb-4" id="dynamicAddRemove">  
                                <tr>
                                    <th>Item Code</th>
                                    <th>Item Description</th>
                                    <th>Qty</th>
                                    <th>Oum</th>
                                    <th>Remarks</th>
                                    <th>Action</th>
                                </tr>

                                <tr >  
                                    <!-- <td><input type="text"  v-model="field.item_code" class="form-control " /></td>  
                                    <td><textarea type="text" v-model="field.item_description" class="form-control " ></textarea></td>  
                                    <td><input type="number"  v-model="field.qty" class="form-control " /></td>  
                                    <td><input type="text"  v-model="field.uom" class="form-control " /></td>  
                                    <td><input type="text"  v-model="field.remarks" class="form-control " /></td>  
                                    <td><button type="button"  class="btn btn-danger">Remove</button></td>   -->
                                    <td><input type="text" name="items[0][item_code]" class="form-control " /></td>  
                                    <td><textarea type="text" name="items[0][item_description]" class="form-control " ></textarea></td>  
                                    <td><input type="number" name="items[0][qty]" class="form-control " /></td>  
                                    <td><input type="text" name="items[0][uom]" class="form-control " /></td>  
                                    <td><input type="text" name="items[0][remarks]"  class="form-control " /></td>  
                                    <td><button type="button" name="add" id="add-btn" class="btn btn-success">Add</button></td> 
                                </tr>  
                            </table> 
                                <div>
                                    <!-- <button type="button" class="btn btn-success" @click="addRow">Add row</button> -->
                                </div>
                                <br>
                            <!--
                                Dynamic Fields End
                            -->

                            <div class="row">
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="prepared_by" type="text"  class="form-control " autocomplete="off">
                                        <label for="floatingInput">Prepared By:</label>
                                    </div> 
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="approved_by" type="text"  class="form-control @" autocomplete="off">
                                        <label for="floatingInput">Approved By:</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="release_by" type="text"  class="form-control " autocomplete="off">
                                        <label for="floatingInput">Release By:</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="sales_admin" type="text"  class="form-control " autocomplete="off">
                                        <label for="floatingInput">Sales Admin</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating mb-3">
                                        <input name="wh_incharge" type="text"  class="form-control" autocomplete="off">
                                        <label for="floatingInput">Warehouse In-Charge</label>
                                    </div>
                                </div>
                            </div>

                            <button type="submit" class="btn btn-primary">Save and Print</button>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    </div>


</template>

<script>
    export default {

        // data:{
        //     field:[{item_code:'',item_description:'',qty:'',uom:'',remarks:''}],
        // },
        // data() {
        //     return {
        //         posts: [],
        //         strSuccess: '',
        //         strError: ''
        //     }
        // },
        // created() {
        //     this.$axios.get('/sanctum/csrf-cookie').then(response => {
        //         this.$axios.get('/api/posts')
        //         .then(response => {
        //             this.posts = response.data;
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         });
        //     });
        // },
        methods: {

            addRow(e){

            },
            deletePost(id) {
                this.$axios.get('/sanctum/csrf-cookie').then(response => {
                    let existingObj = this;

                    if(confirm("Do you really want to delete this data?")) {
                        this.$axios.delete(`/api/posts/delete/${id}`)
                        .then(response => {

                            let i = this.posts.map(item => item.id).indexOf(id); // find index of your object
                            this.posts.splice(i, 1);
                            existingObj.strError = "";
                            existingObj.strSuccess = response.data.success;

                        })
                        .catch(function(error) {
                            existingObj.strError = "";
                            existingObj.strSuccess = error.response.data.message;
                        });
                    }
                });
            }
        },
        beforeRouteEnter(to, from, next) {
            if (!window.Laravel.isLoggedin) {
                window.location.href = "/";
            }
            next();
        }
    }

</script>