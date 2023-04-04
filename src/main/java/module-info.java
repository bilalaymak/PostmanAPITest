module com.example.postmanapi {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.postmanapi to javafx.fxml;
    exports com.example.postmanapi;
}