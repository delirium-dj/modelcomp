# Inkling — findings by Fledge Alpha

- Source: Thinking Machines Lab (`inkling`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling (Thinking Machines Lab)
- **Short description:** Thinking Machines' July 15, 2026 first in-house open-weights model — 975B MoE, 41B active, native text/image/audio reasoning, Apache 2.0, 1M context.
- **Provider / access:** Hugging Face (`thinkingmachines/Inkling`, BF16 + NVFP4 checkpoints), Tinker API, SGLang/vLLM/llama.cpp.
- **Release / knowledge:** 2026-07-15; companion `Inkling-Small` (276B/12B active) released two weeks later.
- **IDs:** `thinkingmachines/Inkling`
- **Context window:** 1,048,576 tokens; Tinker offers 64K/256K options.
- **Modalities:** text + image + audio in; text out; controllable thinking effort 0.2–0.99.
- **Pricing (as of 2026-10-02):** Not vendor-published per-token list; third-party estimate ~$1.87/$4.68 per 1M. Open weights — free to self-host.
- **Architecture:** 975B MoE, 41B active, 45T-token pretraining on text/image/audio/video, speculative MTP layers, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (effort 0.99, internal harness; 0-scored contamination rollouts were zeroed, so the number is a lower bound on the raw run)
- MCP-Atlas: **76.0%**; GDPval-AA v2: **1238 Elo**
- τ³-Banking: **23.7%**; Toolathlon-Verified: **45.5%**
- Audit: AA Omniscience score of 2.1 on Inkling's table (competitive with DeepSeek V4 Pro's −10 and K2.6's 6.0)

Reasoning / knowledge:

- HLE text-only: **29.7%**; with tools: **46.0%**; AIME 2026: **97.1%**
- GPQA Diamond: **87.2%**; AA Intelligence Index: **41** (v4.1) — leading U.S. open-weights model at release
- IFBench: **79.8%**; Global-MMLU-Lite: **88.7%**

Coding:

- SWE-bench Verified (bash-only harness): **77.6%**; SWE-bench Pro (Public): **54.3%**
- Terminal-Bench 2.1: **63.8%** (above)

Multimodal:

- Audio: Audio MC 56.6%, MMAU 77.2%, VoiceBench 91.4%
- Vision: MMMU Pro Standard-10 73.5%, CharXiv RQ 78.1% (82.0% with python)

### Normalized scores (1–100)

- **Tool use: 68/100.** Terminal-Bench 2.1 63.8% and MCP-Atlas 76% are competitive; τ³-Banking 23.7% trails flagships and Toolathlon 45.5% is weak.
- **Reasoning: 75/100.** AIME 97.1% and GPQA 87.2% are strong for a first release; AA Index 41 reflects a mid-tier composite in the U.S. open tier.
- **Context window: 92/100.** 1M native window; Apache 2.0 self-hostable.
- **Multimodal: 86/100.** Native text/image/audio with on-par MMAU/VoiceBench rows — a structurally broad modality surface.
- **Coding: 72/100.** SWE-bench Verified 77.6% and Pro 54.3% are respectable but trail Kimi K2.6/GLM 5.2 on shared vendor rows.
- **Cost efficiency: 84/100.** Open Apache 2.0 weights; Tinker API pricing is the only paid path, and no first-party list has been published.
- **Overall Score: 79/100.** Mean of the five quality dims; best fit as a broadly multimodal, ethically auditable open-weights alternative to Chinese open tier — early hands-on evidence is mixed on coding reliability.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (TML launch post, thinkingmachines/model card, Raschka architecture notes, HowAIWorks summary, HF Inkling model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
