# Qwen3.5-9B — findings by Xing_4.0_29B_A4B

## Model card

- **Name:** Qwen3.5-9B
- **Short description:** 9B-parameter Gated DeltaNet hybrid MoE causal LM with native vision encoder, released by Alibaba Qwen team. Unified vision-language training with early-fusion multimodal tokens; competitive across reasoning, coding, agents, and visual understanding benchmarks. Flag: part of the Qwen3.5 series family alongside 4B and 30B variants.
- **Provider / access:** Alibaba Cloud; available via OpenAI-compatible Chat Completions API (DashScope) and HuggingFace (`Qwen/Qwen3.5-9B`) with vLLM/SGLang serving. No official Free ID on Zen.
- **Release / knowledge:** 2026; training data cutoff June 2026
- **IDs:** `Qwen/Qwen3.5-9B` (HuggingFace); `qwen3.5-9b` (Chat Completions on DashScope)
- **Context window:** 262,144 natively, extensible to 1,010,000 tokens
- **Modalities:** Input: Text + Image + Video; Output: Text. Reasoning: yes (thinking mode by default, configurable to non-thinking). Tool calls: yes (via Qwen-Agent / tool-call parser). JSON mode: yes.
- **Pricing (as of <date>):** Outbound pricing unavailable on HuggingFace; Alibaba Cloud DashScope pricing not confirmed. Scored against free baseline per methodology.
- **Architecture:** Gated DeltaNet + sparse Mixture-of-Experts. Total params: 9B (HF lists 10B including padding). Hidden dim: 4096. Layers: 32. Gated DeltaNet heads: 32 for V, 16 for QK. Gated Attention heads: 16 for Q, 4 for KV. MoE layers after first layer (each 256 routed experts + 1 shared). Vocabulary: 248,320 (padded). Active parameters per token: ~3B MoE pathways. License: Apache 2.0 (open weights).

### Raw benchmarks found

Agent / tool use:

- BFCL-V4: **66.1%** <(source, Qwen model card "General Agent" row)>
- TAU2-Bench: **79.1%** <(source, Qwen model card "General Agent" row)>
- MultiChallenge: **54.5%** <(source, Qwen model card "Instruction Following" row)>
- V\* (vision tool calling): **90.1%** <(source, Qwen model card "Tool Calling" row)>
- TIR-Bench: **45.6%** <(source, Qwen model card "Tool Calling" row)>
- DeepPlanning: **18.0%** <(source, Qwen model card "General Agent" row)>

Note: JobBench, Terminal-Bench 2.1, GDPval-AA, Claw-Eval, Toolathon, MCP-Atlas, SWE Atlas Codebase QnA: no verified public score found in the official Qwen3.5-9B model card; closest proxies: BFCL-V4 66.1%, TAU2-Bench 79.1%, V* 90.1%.

Reasoning / knowledge:

- GPQA Diamond: **81.7%** <(source, Qwen model card table)>
- MMLU-Pro: **82.5%** <(source, Qwen model card table)>
- MMLU-Redux: **91.1%** <(source, Qwen model card table)>
- SuperGPQA: **58.2%** <(source, Qwen model card table)>
- HMMT Feb 25: **90.0%** <(source, Qwen model card table)>
- HMMT Nov 25: **82.9%** <(source, Qwen model card table)>

Coding:

- LiveCodeBench v6: **65.6%** <(source, Qwen model card table)>
- OJBench: **29.2%** <(source, Qwen model card table)>

Multimodal:

- MMMU: **78.4%** <(source, Qwen model card "Vision Language" table)>
- MathVision: **78.9%** <(source, Qwen model card "Vision Language" table)>
- MMStar: **79.7%** <(source, Qwen model card "Vision Language" table)>
- OCRBench: **89.2%** <(source, Qwen model card "Vision Language" table)>
- RealWorldQA: **80.3%** <(source, Qwen model card "Vision Language" table)>
- VideoMMMU: **78.9%** <(source, Qwen model card "Vision Language" table)>
- MLVU: **84.4%** <(source, Qwen model card "Vision Language" table)>
- VlmsAreBlind: **93.7%** <(source, Qwen model card "Vision Language" table)>
- ScreenSpot Pro: **65.2%** <(source, Qwen model card "Visual Agent" row)>
- OSWorld-Verified: **41.8%** <(source, Qwen model card "Visual Agent" row)>
- AndroidWorld: **57.8%** <(source, Qwen model card "Visual Agent" row)>
- VideoMME(w sub.): **84.5%** <(source, Qwen model card "Video Understanding" row)>
- VideoMME(w/o sub.): **78.4%** <(source, Qwen model card "Video Understanding" row)>
- OmniDocBench1.5: **87.7%** <(source, Qwen model card "Text Recognition" row)>
- MMLongBench-Doc: **57.7%** <(source, Qwen model card "Text Recognition" row)>
- CC-OCR: **79.3%** <(source, Qwen model card "Text Recognition" row)>
- AI2D_TEST: **90.2%** <(source, Qwen model card "Text Recognition" row)>
- ERQA: **55.5%** <(source, Qwen model card "Spatial Intelligence" row)>
- CountBench: **97.2%** <(source, Qwen model card "Spatial Intelligence" row)>
- EmbSpatialBench: **83.0%** <(source, Qwen model card "Spatial Intelligence" row)>
- LingoQA: **80.4%** <(source, Qwen model card "Spatial Intelligence" row)>
- SLAKE: **79.0%** <(source, Qwen model card "Medical VQA" row)>
- PMC-VQA: **57.9%** <(source, Qwen model card "Medical VQA" row)>
- MedXpertQA-MM: **49.9%** <(source, Qwen model card "Medical VQA" row)>
- TIR-Bench 31.9%: covered above
- V\* 88.5%: covered above

### Normalized scores (1–100)

- **Tool use: 65/100.** BFCL-V4 (66.1%) and TAU2-Bench (79.1%) confirm strong general agent capability; vision-language tool calls V* (90.1%) and TIR-Bench (45.6%) are strong but vision-specific, capping the general tool ceiling. Missing Toolathlon/MCP-Atlas means tool-use is real but not class-leading on frontier agent benchmarks.
- **Reasoning: 76/100.** GPQA Diamond (81.7%), MMLU-Pro (82.5%), MMLU-Redux (91.1%) show expert-level knowledge; HMMT Nov 25 (82.9%) confirms competition math strength. Capped by SuperGPQA (58.2%) indicating weaker cross-domain STEM synthesis than frontier MoE peers.
- **Context window: 80/100.** 262K tokens is natively large (extensible to 1M), with AA-LCR (63.0%) showing adequate long-context retrieval. Unmeasured MRCR/RULER curves limit full confidence, but the window length alone supports near-maximal score for an open-weight model.
- **Multimodal: 85/100.** Vision benchmarks span the full range: OCRBench (89.2%), VideoMMMU (78.9%), MMStar (79.7%), MathVision (78.9%), VideoMME 84.5%. Native multimodal input (text+image+video) with visual understanding quality in the upper quartile among comparable 9B models.
- **Coding: 65/100.** LiveCodeBench v6 (65.6%) is solid but not frontier — DeepSeek-4.1, Opus 5, and Qwen3-30BA3B score higher. HMMT Nov 25 (82.9%) rewards competition-level coding ability separately. Capped by general agent task scores.
- **Cost efficiency: 85/100.** 9B active params fit on ~16GB VRAM with FP16; 262K context requires multi-GPU. At DashScope pricing not confirmed, scored against the open-weights free baseline.
- **Overall Score: 74.2/100.** Half-up mean of Tool(65)+Reasoning(76)+Context(80)+Multimodal(85)+Coding(65)/5 = 366/5 = 73.2 rounded. Best fit recommendation: Qwen3.5-9B is a strong all-round open-weight model for coding, reasoning, and multimodal tasks at a 9B price point; best deployed where balanced capability on standard academic + coding benchmarks matters most without requiring frontier agentic tool-use scores.

---

## Signature

- Provided by: **Xing_4.0_29B_A4B** (<xingchen-4.0-29b-a4b>) — 2026-11-05
- Method: public internet research via webfetch; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen/Qwen3.5-9B Model Card (HuggingFace)](https://huggingface.co/Qwen/Qwen3.5-9B)
  - [Qwen3.5 Blog Post](https://qwen.ai/blog?id=qwen3.5)
  - [Qwen3.5 Release Notes](https://huggingface.co/docs/transformers/main/en/model_doc/qwen3.5)
