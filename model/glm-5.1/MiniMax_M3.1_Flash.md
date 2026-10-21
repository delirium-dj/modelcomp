# GLM 5.1 — findings by MiniMax M3.1 Flash

- Source: Z.ai (Zhipu) (GLM-5.1), `zai-org/GLM-5.1`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1
- **Short description:** Z.ai's April 2026 MIT-licensed 744B/40B-active MoE with DeepSeek Sparse Attention — Z.ai's "long-horizon" flagship, built to run multi-hour agentic coding tasks, with SWE-bench Pro 58.4%, Terminal-Bench 2.0 63.5% and a τ²-bench of 97.7% on Artificial Analysis.
- **Provider / access:** Hugging Face `zai-org/GLM-5.1` (MIT; FP8 twin `zai-org/GLM-5.1-FP-8`), ModelScope `ZhipuAI/GLM-5.1`, Z.ai platform, OpenRouter `z-ai/glm-5.1`, OpenCode Zen `opencode/glm-5.1` (**$1.40/M in, $4.40/M out, $0.26/M cached**).
- **Release / knowledge:** **2026-04-07** (Z.ai blog, AA, BenchLM, OpenRouter, Z.ai release notes). Knowledge cutoff not published.
- **IDs:** `glm-5.1` (Z.ai / OpenCode Zen), `z-ai/glm-5.1` (OpenRouter), `zai-org/GLM-5.1` (HF).
- **Context window:** **200,000–204,800** tokens (`max_position_embeddings` 202,752; AA 200K, BenchLM 203K, OpenRouter 204,800), max output 128,000–131,072.
- **Modalities:** text in / text out only; reasoning always on.
- **Pricing (as of 2026-10-20):** **$1.40/M in, $4.40/M out, $0.26/M cached** (Z.ai list price and Zen). AA lists $1.285/$4.07 (blended provider price); Vals AI ran it at $1.00/$3.20.
- **Architecture:** MoE, **744B total / 40B active** (Z.ai card, AA); the HF safetensors count is 753.9B — a card-vs-weight-count conflict. `glm_moe_dsa` (DeepSeek Sparse Attention), 78 layers, 256 routed experts with 8 active + 1 shared, indexer top-k 2048, KV/Query LoRA 512/2048.

### Raw benchmarks found

> Z.ai's own card against Vals AI and Artificial Analysis; the Terminal-Bench and SWE-bench rows are harness-sensitive.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **63.5%** (Z.ai card; 69.0% on the Claude Code scaffold) · Terminal-Bench 2.1: **62.0%** (Z.ai) vs **56.9%** (Vals AI) vs **61.8%** (AA)
- Tau2-bench: **97.66%** (AA) · Tau3-Banking: **13.6%** (AA) · GDPval-AA: **1116.24** (AA) · AutomationBench partial: **20.3%** (AA) · Terminal-Bench 4.0: **2.0%** (AA)
- MCP-Atlas: **71.8%** (Z.ai card) · Tool-Decathlon: **40.7%** (Z.ai) · ClawEval: **62.3%** (BenchLM) · Gert Labs: **60.11%** (BenchLM) · BrowseComp: **68.0%** (Z.ai) · ResearchClawBench: **18.2%** (BenchLM)
- Bench Tool-Agent-User Evaluation: **70.6%** (BenchLM) · IT-Bench-SRE: **40.3%** (AA)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Z.ai card) / **86.77%** (AA) / **84.5%** (Vals AI)
- HLE: **31.0%** no tools / **52.3%** with tools (Z.ai) / **30.07%** (AA) · AIME 2026: **95.3%** · HMMT Nov 2025: **94.0%**, Feb 2026: **82.6%** · IMOAnswerBench: **83.8%**
- MMLU-Pro: **86.9%** (Vals AI / BenchLM) · Artificial Analysis Intelligence Index: **26** · AA-LCR: **73.7%** · CritPt: **4.57%** (AA) · IFBench: **76.3%** (AA)
- Omniscience Accuracy / Hallucination Rate: **23.7% / 29.9%** (AA) · FrontierMath v2 Tiers 1–3: **36.8%** (BenchLM)

Coding:

- SWE-bench Verified: **76.4%** (Vals AI) — Z.ai publishes none for GLM-5.1 · SWE-bench Pro: **58.4%** (Z.ai card) · SWE-Rebench: **62.7%** (BenchLM)
- LiveCodeBench: **81.4%** (Vals AI) · Vibe Code Bench v1.1: **31.46%** (BenchLM) · NL2Repo: **42.7%** (Z.ai) · OpenHarmony Bench v1.0: **52.3%** (BenchLM) · CyberGym: **68.7%** (Z.ai)

Long context:

- No MRCR / RULER measurement published for GLM-5.1, despite the 200K window.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 56.9–62.0%, τ²-bench 97.7%, MCP-Atlas 71.8%, ClawEval 62.3%, Gert Labs 60.1% and GDPval-AA 1116 are solid mid-to-high band numbers, capped by Tool-Decathlon 40.7%, Terminal-Bench 4.0 at 2.0% and AutomationBench 20.3%.
- **Reasoning: 78/100.** GPQA 84.5–86.8%, MMLU-Pro 86.9%, AIME 2026 95.3%, IMOAnswerBench 83.8% and HLE 52.3% with tools are strong, capped by FrontierMath T1–3 at 36.8% and an AA Intelligence Index of 26.
- **Context window: 70/100.** 200K–204,800 tokens is the 200K–500K tier and no long-context retrieval test is published.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 76/100.** SWE-bench 76.4% (independent), SWE-bench Pro 58.4%, LiveCodeBench 81.4% and Vibe Code Bench 31.5% are good mid-to-high band results, held back by NL2Repo 42.7% and the weak FrontierMath.
- **Cost efficiency: 78/100.** $1.40/M in and $4.40/M out with a $0.26/M cache read is mid-market for a 744B flagship — and MIT weights make self-hosting free.
- **Overall Score: 62/100.** Mean of the five quality dims = (70 + 78 + 70 + 15 + 76) / 5 = 61.8 → **62**. Best fit: multi-hour agentic coding on a self-hostable MIT MoE — Z.ai's own successor path points to GLM-5.3.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Z.ai blog, docs and Hugging Face model card/config, Artificial Analysis, BenchLM + Vals AI, models.dev, OpenCode Zen docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.2.md`, using the same headings.
