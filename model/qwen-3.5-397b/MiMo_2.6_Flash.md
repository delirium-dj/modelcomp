# Qwen3.5-397B — findings by MiMo 2.6_Flash

- Source: Alibaba / Qwen Team (`qwen-3.5-397b`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5-397B (Qwen3.5-397B-A17B)
- **Short description:** Alibaba's open-weight multimodal MoE flagship from the Qwen3.5 generation (released 2026-02-16) — 397B total / 17B active parameters, natively multimodal (text/image/video in), thinking mode default, strong STEM/coding for open-weight class. Mid-generation workhorse before Qwen3.6/3.7/3.8 lines; still widely served and benchmarked.
- **Provider / access:** Alibaba Cloud DashScope / Model Studio; Hugging Face open weights; OpenRouter; aggregators (DeepInfra, Novita, Venice, etc.); Chat Completions with tool calling / structured outputs.
- **Release / knowledge:** Released 2026-02-16 (DataLearner). Knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.5-397b` (OpenRouter); `Qwen3.5-397B-A17B` (HF/DataLearner).
- **Context window:** 262,144 tokens (262K; some listings 256K; morphllm notes family extends to 1M on higher tiers); max output up to 236K (Serenities listing).
- **Modalities:** text + image + video in; text out; thinking mode (default) + standard mode; tool calling.
- **Pricing (as of 2026-10-13):** ~$0.55 / 1M input, $3.50 / 1M output (DeepInfra/serenitiesai aggregators); Venice $0.75/$4.50; BenchLM lists $0.60/$3.60. Open weights for self-host.
- **Architecture:** MoE, 256 experts (8 routed + 1 shared); 397B total / 17B active; multimodal encoder for image/video.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **52.5%** (BenchLM)
- BrowseComp: **62%** (BenchLM)
- VITA-Bench: **43.7%** (BenchLM vs GLM-4.7)
- BFCL v4: **72.9%** (morphllm family table)

Coding:

- SWE-bench Verified: **76.2–76.4%** (BenchLM / morphllm / serenitiesai)
- LiveCodeBench v6: **83.6%** (BenchLM / morphllm / DataLearner)
- SWE-bench Pro: **50.9%** (DataLearner / BenchLM)
- SWE-bench Multilingual: **69.3%** (DataLearner)
- SciCode: **44.8%** (DataLearner)

Reasoning / knowledge:

- AIME 2026: **91.3%** (DataLearner / morphllm)
- IMO-AnswerBench: **80.9%** (DataLearner)
- GPQA Diamond: **88.4%** (thinking mode; DataLearner / BenchLM / morphllm); standard mode 86.36%
- MMLU-Pro: **87.8%** (DataLearner / lmmarketcap)
- MMLU: **88.5%** (morphllm)
- HLE: **28.7%** (BenchLM)
- Chatbot Arena Elo: 1350–1442 (listing variance)

Multimodal:

- MMMU: **85%** (DataLearner, rank #5/74); MMMU-Pro 79% (BenchLM)
- Native image + video input

Long context:

- 262K native; Context Arena thinking mode 75.54; Harvey Lab-AA (thinking+tools) 72.38 (DataLearner)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.0 52.5% and BFCL v4 72.9% are solid; BrowseComp 62% and VITA-Bench 43.7% mid. Capped by no PinchBench/ClawEval-tier figures and mid agentic harness scores.
- **Reasoning: 85/100.** AIME26 91.3 + GPQA-D 88.4 + MMLU-Pro 87.8 + IMO-AnswerBench 80.9 is elite open-weight STEM. Capped by HLE 28.7 (mid) and Arena Elo mid-1300s.
- **Context window: 80/100.** 262K native with Context Arena 75 / Harvey 72 is solid long-context. Capped by no 1M native on this checkpoint (family extends higher) and max-output listing variance.
- **Multimodal: 70/100.** Native text+image+video input with MMMU 85 / MMMU-Pro 79 is strong open multimodal — much better than text-only peers. Capped by no audio and no video-MME figure.
- **Coding: 75/100.** SWE-V 76.4 + LCB v6 83.6 + Multilingual 69.3 is top open-weight coding class for 17B-active. Capped by SWE-Pro 50.9 (mid vs frontier) and SciCode 44.8.
- **Cost efficiency: 82/100.** $0.55/$3.50 for 17B-active 397B multimodal is strong value; open weights allow self-host. Capped by higher output rate than flash-tier open peers and slower 45 tok/s.
- **Overall Score: 76/100.** Mean of (68 + 85 + 80 + 70 + 75) / 5 = 75.6 → **76**. Best-fit recommendation: strongest open-weight multimodal STEM/coding workhorse in the Qwen3.5 generation — prefer for image/video+code pipelines needing AIME/GPQA-class math-science at open-weight cost; upgrade to Qwen3.8 Max for frontier agentic ceilings.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (BenchLM compare/model pages, DataLearner model card, morphllm guide, serenitiesai, lmmarketcap, GLM-5 vs Qwen 3.5 comparison); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
