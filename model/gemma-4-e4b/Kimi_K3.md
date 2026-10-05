# Gemma 4 E4B — findings by Kimi K3

- Source: Google DeepMind / Gemma 4 E4B (`google/gemma-4-E4B`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google's edge-optimized open multimodal model (effective ~4B, ~8B with embeddings) from the Gemma 4 family for phones, laptops and Pi-class devices — vision + native audio input with thinking mode, prioritizing low memory and private local inference.
- **Provider / access:** OpenCode Zen `opencode/gemma-4-e4b`; weights on Hugging Face (`google/gemma-4-E4B`), Kaggle, Ollama, Google AI Studio. Chat Completions-style APIs.
- **Release / knowledge:** Shipped 2026-04-02 with the five-size Gemma 4 launch (markaicode.com, ai.google.dev model card); July 15, 2026 refresh changed tool-calling behavior and vision defaults under the same version name. Training data ends January 2025 (technical report via gemmai4.com).
- **IDs:** `opencode/gemma-4-e4b` on Zen; `google/gemma-4-E4B` on Hugging Face.
- **Context window:** 128K (131K per llm-stats.com); max output not separately published.
- **Modalities:** Text, image and audio in; text out; thinking/reasoning mode; function calling supported (strengthened in the July 2026 refresh).
- **Pricing (as of 2026-10-05):** Open weights (Apache 2.0, free self-host); hosted from ~$0.02 / $0.10 per 1M (llm-stats.com).
- **Architecture:** Open-weight dense edge model, effective ~4B parameters (~8B incl. embeddings), 305M-param audio encoder (technical report via gemmai4.com).

### Raw benchmarks found

All scores from the Gemma 4 Technical Report (arXiv:2607.02770, via gemmai4.com), thinking mode on unless noted.

Agent / tool use:

- IFBench: **44.0**; IFEval **96.7** (tech report)
- Agentic composite (independent aggregate): family-wide gap — "near bottom, 25.5/100 (#129/134)" for the 31B; E4B went "from effectively zero on TB2 agent benchmarks to a working score" after the July 2026 refresh
- Terminal-Bench 2.1 / Tau3 / GDPval / Claw-Eval: **no verified public score found** for E4B

Reasoning / knowledge:

- GPQA Diamond: **58.6%**
- MMLU Pro: **69.4**
- AIME 2026 (no tools): **42.5**
- BBH: **33.1**
- HLE: **no verified public score found** (E4B cell empty in tech report)

Coding:

- LiveCodeBench v6: **52.0**
- Codeforces Elo: **940**
- SciCode: **24.0**
- SWE-bench Verified: **no verified public score found**

Vision / audio:

- MMMU Pro: **52.6** (1120 vision tokens; 51.4 at 280 default)
- MATH-Vision: **59.5**; InfographicVQA: **70.0**; MedXpertQA MM: 28.7; OmniDocBench 0.181 (lower better)
- FLEURS transcription WER: **0.075**; CoVoST speech-translation BLEU: **38.2**

Long context:

- RULER **95.2 @32K / 86.6 @128K** (measured without thinking mode)
- LOFT retrieval Recall@k @128K: **58.5**; GraphWalks F1 <128K: **50.9**; MTOB eng→kgv @128K: 37.8

### Normalized scores (1–100)

- **Tool use: 45/100.** Agentic/tool use is the documented family gap (31B composite 25.5/100); E4B only reached a "working" TB2-level score after the July refresh. IFEval 96.7 / IFBench 44.0 keep it above the floor.
- **Reasoning: 58/100.** GPQA 58.6, MMLU Pro 69.4, AIME 42.5 — solid mid-band (ref: GPQA 60–80% → 55–65), capped by BBH 33.1 and no HLE number.
- **Context window: 60/100.** 100K–200K band (50–64): 128K nominal with genuinely usable retrieval (RULER 86.6, LOFT 58.5 @128K) pushes to the upper half of the band.
- **Multimodal: 78/100.** Native image + audio in with text out; vision quality moderate (MMMU Pro 52.6), audio genuinely strong (FLEURS 0.075 WER, CoVoST 38.2 — best-in-class at edge size). Below the 90+ flagship-audio band because vision is mid-tier.
- **Coding: 52/100.** LiveCodeBench 52.0 and Codeforces Elo 940 are entry-coding tier; SciCode 24.0 and no SWE-bench number cap it.
- **Cost efficiency: 99/100.** Apache 2.0 open weights ($0 self-host) with ~$0.02/$0.10 hosted pricing — effectively the $0 reference.
- **Overall Score: 59/100.** Mean of (45 + 58 + 60 + 78 + 52) / 5 = 58.6 → 59. Best fit: on-device multimodal (vision+audio) assistants and edge agents; not for multi-step agentic or heavy coding loops.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-10-05
- Method: public internet research (Gemma 4 Technical Report arXiv:2607.02770 via gemmai4.com, llm-stats.com, ai.google.dev, huggingface.co); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
