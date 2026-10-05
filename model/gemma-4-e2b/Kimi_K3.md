# Gemma 4 E2B — findings by Kimi K3

- Source: Google DeepMind / Gemma 4 E2B (`google/gemma-4-E2B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google's smallest Gemma 4 edge variant (effective ~2B, ~2.3B with embeddings) for phones, laptops and Jetson/Pi-class hardware — open weights with native image and audio input; excellent at short, well-scoped tasks, unreliable at multi-hop long context.
- **Provider / access:** OpenCode Zen `opencode/gemma-4-e2b`; weights on Hugging Face (`google/gemma-4-E2B`), Kaggle, Ollama, Google AI Studio. Chat Completions-style APIs.
- **Release / knowledge:** Shipped 2026-04-02 with the Gemma 4 family (markaicode.com); July 15, 2026 refresh changed tool-calling/vision defaults under the same version. Training data ends January 2025 (technical report via gemmai4.com).
- **IDs:** `opencode/gemma-4-e2b` on Zen; `google/gemma-4-E2B` on Hugging Face.
- **Context window:** 128K nominal (multi-hop reasoning across the window effectively fails — GraphWalks 4.1 — per technical report).
- **Modalities:** Text, image and audio in; text out; thinking/reasoning mode; function calling supported.
- **Pricing (as of 2026-10-05):** Open weights (Apache 2.0, free self-host); hosted ~$0.04 / $0.08 per 1M (curated Zen meta).
- **Architecture:** Open-weight dense edge model, effective ~2B parameters, 305M-param audio encoder shared with E4B (technical report via gemmai4.com).

### Raw benchmarks found

All scores from the Gemma 4 Technical Report (arXiv:2607.02770, via gemmai4.com), thinking mode on unless noted.

Agent / tool use:

- IFBench: **38.0**; IFEval **94.6** (tech report)
- Agentic composite: family-wide gap (31B ranks near bottom, 25.5/100, #129/134); E2B is the weakest sibling — "Treat E2B as excellent at short, well-scoped tasks and unreliable the moment a task needs chaining"
- Terminal-Bench 2.1 / Tau3 / GDPval / Claw-Eval: **no verified public score found** for E2B

Reasoning / knowledge:

- GPQA Diamond: **43.4%**
- MMLU Pro: **60.0**
- AIME 2026 (no tools): **37.5** — above the previous generation's 27B flagship baseline (20.8), at a ~1 GB RAM footprint
- BBH: **21.9**
- HLE: **no verified public score found**

Coding:

- LiveCodeBench v6: **44.0**
- Codeforces Elo: **633**
- SciCode: **21.0**
- SWE-bench Verified: **no verified public score found**

Vision / audio:

- MMMU Pro: **44.2** (1120 vision tokens; 43.2 at 280 default)
- MATH-Vision: **52.4**; InfographicVQA: **63.9**; MedXpertQA MM: 23.5; OmniDocBench 0.290 (lower better)
- FLEURS transcription WER: **0.090**; CoVoST speech-translation BLEU: **35.4**

Long context:

- RULER **83.0 @32K / 70.4 @128K** (without thinking mode)
- LOFT retrieval Recall@k @128K: **50.5**; GraphWalks F1 <128K: **4.1 (effective failure)**; MTOB eng→kgv @128K: 15.4

### Normalized scores (1–100)

- **Tool use: 40/100.** Weakest sibling in a family whose documented gap is agentic tool use; IFEval 94.6 / IFBench 38.0 show single-turn compliance without reliable multi-step chains.
- **Reasoning: 50/100.** GPQA 43.4, MMLU Pro 60.0, AIME 37.5 — remarkable for a ~2B edge model but below the 55–65 mid band; BBH 21.9 caps it.
- **Context window: 52/100.** 128K puts it in the 50–64 band, but RULER drops to 70.4 at 128K and GraphWalks 4.1 is an effective failure for multi-hop use — retrieval-only reliability.
- **Multimodal: 75/100.** Native image + audio in, text out; modest vision (MMMU Pro 44.2) but solid audio (WERR 0.090, BLEU 35.4, beating Gemma 3n E2B). Edge-tier, below flagship-audio band.
- **Coding: 45/100.** LiveCodeBench 44.0, Codeforces Elo 633, SciCode 21.0 — light coding assistance only; no SWE-bench verified number.
- **Cost efficiency: 99/100.** Apache 2.0 open weights ($0 self-host on phone-class hardware); hosted ~$0.04/$0.08 — effectively the $0 reference.
- **Overall Score: 52/100.** Mean of (40 + 50 + 52 + 75 + 45) / 5 = 52.4 → 52. Best fit: offline/on-device multimodal helpers and short scoped tasks; escalate anything chained or agentic.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (Gemma 4 Technical Report arXiv:2607.02770 via gemmai4.com, markaicode.com, ai.google.dev, huggingface.co); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
