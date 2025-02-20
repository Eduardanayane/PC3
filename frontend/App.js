      const API_URL = "http://127.0.0.1:4000";

      import React, { useState } from "react";
      import {
        View,
        Text,
        StyleSheet,
        TextInput,
        Image,
        Alert,
        Linking,
        ScrollView,
        TouchableOpacity,
      } from "react-native";
      import { Picker } from "@react-native-picker/picker";

      export default function App() {
        const [etapa, setEtapa] = useState(1);
        const [dados, setDados] = useState({
          pessoa: "",
          tipoImovel: "",
          valorImovel: "",
          localizacao: "",
          rendaBruta: "",
          score: "",
          dataNascimento: "",
        });

        const linksFictícios = [
          { label: "MINHA CASA MINHA DÍVIDA", url: "https://www.simuladorfalso1.com" },
          { label: "CASA VERDE E VERMELHA", url: "https://www.simuladorfalso2.com" },
          { label: "FUTURO LAR", url: "https://www.simuladorfalso3.com" },
          { label: "MORADIA FELIZ", url: "https://www.simuladorfalso4.com" },
          { label: "LAR DOCE LAR FINANCEIRO", url: "https://www.simuladorfalso5.com" },
          { label: "HABITAÇÃO", url: "https://www.simuladorfalso6.com" },
        ];

        const atualizarDados = (campo, valor) => {
          setDados({ ...dados, [campo]: valor });
        };

        const enviarSimulacao = async () => {
          try {
            console.log("Enviando dados para a API:", dados);
            const response = await fetch(`${API_URL}/simulations/step1`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                pessoa: dados.pessoa,
                tipoImovel: dados.tipoImovel,
                valorImovel: parseFloat(dados.valorImovel.replace(/\D/g, "")),
                localizacao: dados.localizacao,
              }),
            });

            const result = await response.json();
            console.log("Resposta da API:", result);

            if (response.ok) {
              Alert.alert("Sucesso", "Simulação iniciada!");
              setEtapa(2);
            } else {
              Alert.alert("Erro", result.message || "Erro ao enviar simulação.");
            }
          } catch (error) {
            console.error("Erro ao enviar a simulação:", error);
            Alert.alert("Erro", "Não foi possível conectar ao servidor.");
          }
        };

        const formatarMoeda = (valor) => {
          if (!valor) return "R$ 0,00";
          return "R$ " + valor.replace(/\D/g, "").replace(/(\d)(\d{2})$/, "$1,$2").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
        };

        const formatarData = (valor) => {
          return valor
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{2})(\d)/, "$1/$2")
            .replace(/(\d{4})\d+?$/, "$1");
        };

        const irParaProximaEtapa = () => {
          console.log("🔄 Tentando avançar para a próxima etapa...");
          console.log("Etapa atual:", etapa);
          console.log("Dados preenchidos:", dados);

          if (etapa === 1) {
            if (!dados.pessoa || !dados.tipoImovel || !dados.valorImovel || !dados.localizacao) {
              Alert.alert("⚠ Erro", "Todos os campos são obrigatórios para avançar.");
              return;
            }
            console.log("✅ Todos os campos preenchidos! Avançando para etapa 2...");
            setEtapa(2);
          } else if (etapa === 2) {
            if (!dados.rendaBruta || !dados.score || !dados.dataNascimento) {
              Alert.alert("⚠ Erro", "Todos os campos são obrigatórios para avançar.");
              return;
            }
            console.log("✅ Todos os campos preenchidos! Avançando para etapa 3...");
            setEtapa(3);
          } else {
            setEtapa(etapa + 1);
          }
        };


        return (
          <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
              <Image source={require("../assets/images/casa.png")} style={styles.headerImage} />
              <Text style={styles.titulo}>SimulaLarCred</Text>
            </View>
      
    {etapa === 1 && (
      <View>
         <Text style={styles.header}>Dados Iniciais:</Text>
          <Text style={styles.label}>Tipo de pessoa:</Text>
        <Picker selectedValue={dados.pessoa} onValueChange={(value) => atualizarDados("pessoa", value)} style={styles.picker}>
          <Picker.Item label="Selecione" value="" />
          <Picker.Item label="Física" value="Física" />
          <Picker.Item label="Jurídica" value="Jurídica" />
        </Picker>
          <Text style={styles.label}>Tipo de imóvel:</Text>
          <Picker
            selectedValue={dados.tipoImovel}
            onValueChange={(value) => atualizarDados("tipoImovel", value)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Residencial" value="Residencial" />
            <Picker.Item label="Comercial" value="Comercial" />
          </Picker>
          <Text style={styles.label}>Valor aproximado do imóvel:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={dados.valorImovel}
            onChangeText={(value) => atualizarDados("valorImovel", formatarMoeda(value))}
            placeholder="Digite o valor do imóvel"
          />
          <Text style={styles.label}>Localização do imóvel:</Text>
          <Picker
            selectedValue={dados.localizacao}
            onValueChange={(value) => atualizarDados("localizacao", value)}
            style={styles.picker}
          >
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="São Paulo" value="São Paulo" />
            <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
            <Picker.Item label="Minas Gerais" value="Minas Gerais" />
            <Picker.Item label="Bahia" value="Bahia" />
            <Picker.Item label="Paraná" value="Paraná" />
            <Picker.Item label="Distrito Federal" value="Distrito Federal" />
          </Picker>
          <TouchableOpacity style={styles.button} onPress={irParaProximaEtapa}>
            <Text style={styles.buttonText}>Próxima Etapa</Text>
          </TouchableOpacity>
        </View>
      )}
            
      {etapa === 2 && (
        <View>
          <Text style={styles.header}>Suas Informações:</Text>
          <Text style={styles.label}>Renda bruta mensal:</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={dados.rendaBruta} onChangeText={(value) => atualizarDados("rendaBruta", formatarMoeda(value))} placeholder="Digite sua renda bruta mensal" />
          <Text style={styles.label}>Score:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={dados.score}
            onChangeText={(value) => atualizarDados("score", value)}
            placeholder="Digite seu score (3 a 4 dígitos)"
            maxLength={4}
          />

          <Text style={styles.label}>Data de nascimento:</Text>
          <TextInput
            style={styles.input}
            value={dados.dataNascimento}
            onChangeText={(value) => atualizarDados("dataNascimento", formatarData(value))}
            placeholder="Digite sua data de nascimento (DD/MM/AAAA)"
          />
          <TouchableOpacity style={styles.button} onPress={irParaProximaEtapa}>
            <Text style={styles.buttonText}>Próxima Etapa</Text>
          </TouchableOpacity>
        </View>
      )}

      {etapa === 3 && (
        <View>
          <Text style={styles.header}>Simulação:</Text>
          <Text style={styles.subHeader}>Parabéns! Você chegou ao fim da simulação.
          </Text>
          
          <TouchableOpacity style={styles.button} onPress={() => setEtapa(4)}>
            <Text style={styles.buttonText}>Ver resultado</Text>
          </TouchableOpacity>
        </View>
      )}

      {etapa === 4 && (
        <View style={styles.resultContainer}>
          <Text style={styles.header}>Resultado:</Text>

          {/* Texto de orientação para o usuário */}
          <Text style={styles.resultText}>
            Aqui está o resultado da sua simulação! 🚀  
            Esses são parceiros que podem ajudar a realizar o sonho da casa própria.  
            Clique nos links abaixo para finalizar a simulação e saber mais sobre as opções disponíveis.
          </Text>

          {linksFictícios.map((link, index) => (
            <Text key={index} style={styles.link} onPress={() => Linking.openURL(link.url).catch(() => Alert.alert("Erro", "Não foi possível abrir o link."))}>
              {link.label}
            </Text>
          ))}

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => setEtapa(1)}>
              <Text style={styles.buttonText}>Refazer Simulação</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { marginTop: 15 }]} onPress={() => setEtapa(3)}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>
       )}
          
        </ScrollView>
      );
    }

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 35,
    backgroundColor: "#F5F5F5",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%", 
  },

  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center", 
    marginBottom: 20,
    width: "100%",
  },

  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 35, 
    marginRight: 15,
    resizeMode: "row",
  },

 
  titulo: {
    fontSize: 60, 
    fontWeight: "bold",
    fontFamily: "serif",
    color: "#4A235A",
    marginBottom: 10,
    textTransform: "uppercase",
    textAlign: "center", 
    alignSelf: "center",
    width: "100%", 
  },

  header: {
    fontSize: 35,
    fontWeight: "700",
    color: "#4A235A",
    fontFamily: "sans-serif-medium",
    marginBottom: 15,
    paddingVertical: 5,
    textAlign: "left", 
    alignSelf: "flex-end",
    width: "90%", 
  },

  label: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
    color: "#333",
    marginBottom: 10,
    textTransform: "uppercase",
    alignSelf: "flex-start",
    width: "90%", 
  },

  
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 20, 
  },
  
  buttonRowContainer: {
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center",
    width: "90%", 
    maxWidth: 400,
    marginTop: 20, 
  },


  button: {
    backgroundColor: "#6C3483",
    paddingVertical: 15,
    paddingHorizontal: 20, /
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flex: 1, 
    marginHorizontal: 10, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 1,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    backgroundColor: "#FFF",
    color: "#333",
    width: "90%", 
    maxWidth: 400, // Evita que fique muito largo
    textAlign: "center",
    fontSize: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  picker: {
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    backgroundColor: "#FFF",
    color: "#333",
    width: "90%", 
    maxWidth: 400,
  },


  link: {
    fontSize: 19,
    fontWeight: "600",
    color: "#4A148C",
    textDecorationLine: "underline",
    marginVertical: 12,
    textAlign: "center",
  },

  resultContainer: {
    width: "100%",
    alignItems: "flex-start", 
    padding: 25,
    paddingLeft: 30, /
    marginTop: 10,
  },

  resultText: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: "#4A235A",
    marginBottom: 20,
    paddingHorizontal: 30,
    lineHeight: 26,
    width: "90%",
    maxWidth: 600, // Mantém um limite de largura
  },
});
