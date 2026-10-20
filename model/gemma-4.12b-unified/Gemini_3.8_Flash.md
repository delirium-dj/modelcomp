# Gemma 4 12B Unified — Model Evaluation

- **Research Date:** 2026-10-20
- **Researcher:** Gemini 3.8 Flash
- **Model Name:** Gemma 4 12B Unified (Google DeepMind)
- **Model Type:** Dense 11.95B parameter encoder-free multimodal foundation model (Apache 2.0)

---

### Executive Summary

Gemma 4 12B Unified is Google DeepMind's mid-sized, open-weights multimodal foundation model released under the Apache 2.0 license, engineered as an innovative encoder-free dense architecture (11.95B parameters). In contrast to hybrid systems that pair separate visual or acoustic encoders with a text backbone, Gemma 4 12B Unified directly tokenizes and models text, images, and raw audio within a unified transformer decoder across a 256,000-token (256K) native context window.

Instruction-tuned variants achieve strong benchmarks for a 12B-class architecture: **77.5% on AIME 2026 (no tools)**, **78.8% on GPQA Diamond**, **72.0% on LiveCodeBench v6**, 69.0% on Tau2 (Google card; 36.3% on third-party Telecom harnesses), and 69.1% on MMMU-Pro. Capable of running locally on a single consumer GPU (e.g., RTX 3090/4090/5090) with output generation speeds between 140–148 tokens/second, it stands as an exceptional open-source engine for local multimodal agents and private developer tools.

---

### Quantitative Evaluation

- **Tool use: 66/100.** Native function calling, system role adherence, and structured JSON output. Scores 69.0% on Tau2 average (36.3% on single-domain Telecom harnesses) and 18.2% on Terminal-Bench Hard; best suited for local agent workflows rather than complex multi-turn cloud terminal loops.
- **Reasoning: 74/100.** Scores 77.5% on AIME 2026, 78.8% on GPQA Diamond, and 77.2% on MMLU-Pro. Demonstrates impressive analytical deduction and mathematical problem-solving for an 11.95B dense model.
- **Context window: 76/100.** 256,000-token native context window with 63.7% on AA-LCR long-context reasoning and 43.4% on MRCR v2 8-needle at 128K; reliable recall across medium-to-large project workspaces.
- **Multimodal: 85/100.** Native encoder-free multimodal ingestion processing text, high-res images (69.1% MMMU-Pro, 79.7% MATH-Vision), and raw audio streams (FLEURS 0.069, CoVoST 38.5); text output only.
- **Coding: 72/100.** Delivers 72.0% on LiveCodeBench v6 and 1659 Codeforces Elo. Highly capable for local repository navigation, script authoring, and automated code review.
- **Cost efficiency: 100/100.** Apache 2.0 permissive open weights enabling completely free local deployment; hosted cloud API endpoints cost ~$0.10 / $0.30 per 1M tokens.
- **Overall Score: 75/100.** (Arithmetic mean: `(66 + 74 + 76 + 85 + 72) / 5 = 373 / 5 = 74.6`, rounded to **75**).

---

### Key Strengths

1. **Unified Encoder-Free Architecture:** Eliminates separate ViT/Audio encoders, streaming text, image patches, and audio tokens through a single 11.95B parameter backbone.
2. **Dense 12B Mathematical Capability:** 77.5% on AIME 2026 matches or outperforms many older 70B open models on competition mathematics.
3. **Local Consumer Hardware Footprint:** Runs unquantized on dual GPUs or comfortably in 12GB–16GB VRAM quantized on single RTX 4080/4090 cards.
4. **Apache 2.0 Open Weights:** Permissive licensing allows unrestricted commercial deployment, private fine-tuning, and offline edge distribution.

---

### Trade-offs & Limitations

1. **Third-Party Agentic Variance:** Noticeable spread between Google's 69.0% Tau2 score and third-party harnesses (~36.3% on Telecom), indicating sensitivity to prompt framing.
2. **Terminal Loop Fragility:** 18.2% on Terminal-Bench Hard indicates vulnerability to execution drift on complex autonomous shell scripts.
3. **Text-Only Generation:** Fully omni-modal input comprehension, but output is restricted to text and structured code tokens.

---

### Pricing & Value Matrix

- **Self-Host License:** Apache 2.0 (Free open source)
- **Hosted API Input:** ~$0.10 per million tokens
- **Hosted API Output:** ~$0.30 per million tokens
- **Hardware Footprint:** ~12B dense (Runs in 12GB–16GB VRAM quantized)
- **Context Capacity:** 256,000 tokens (256K)
- **Speed Tier:** High-speed local / enterprise multimodal model

---

### Benchmark Reference Summary

| Benchmark | Score | Context / Configuration |
| :--- | :--- | :--- |
| **AIME 2026** | 77.5% | Mathematics competition (no tools) |
| **GPQA Diamond** | 78.8% | Graduate-level STEM reasoning |
| **LiveCodeBench v6** | 72.0% | Code generation and execution pass rate |
| **MMMU-Pro** | 69.1% | Multimodal visual understanding |
| **Tau2 Agent Benchmark** | 69.0% (Google) / 36.3% (3rd-party) | Agent instruction following & tool use |

---

### Evaluation Sources

- Google DeepMind Technical Disclosures: [Gemma 4 Unified Architecture Overview](https://huggingface.co/google)
- Artificial Analysis & BenchLM Indexes: [Gemma 4 12B Unified Benchmarks](https://artificialanalysis.ai)
- Analytics Vidhya & Community Evaluations: [Gemma 4 Technical Report Deep Dive](https://analyticsvidhya.com)
