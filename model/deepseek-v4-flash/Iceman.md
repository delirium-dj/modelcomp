# DeepSeek V4 Flash — findings by Iceman

- Source: DeepSeek AI/DeepSeek-V4-Flash
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash
- **Short description:** DeepSeek-V4-Flash is a 284B-parameter Mixture-of-Experts model (13B activated) with 1M-token context, optimized for efficient long-context reasoning, coding, and agentic tasks.
- **Provider / access:** Open weights on Hugging Face (`deepseek-ai/DeepSeek-V4-Flash`, MIT license) and hosted providers. Local metadata lists `opencode/deepseek-v4-flash`, market rate ~$0.14/$0.28 per 1M, and `noFreeId`.
- **Release / knowledge:** Hugging Face model card/technical report (arXiv 2606.19348) reviewed 2026-11-10. Knowledge cutoff not explicitly stated in reviewed source.
- **IDs:** `DeepSeek-V4-Flash`, `deepseek-ai/DeepSeek-V4-Flash`.
- **Context window:** 1,000,000 tokens total (384K max output noted in local metadata; card emphasizes 1M context).
- **Modalities:** Text input/output (text-only model).
- **Pricing (as of 2026-11-10):** Open weights free to self-host (MIT). Hosted market rate ~$0.14/$0.28 per 1M in/out per local metadata; provider pricing varies.
- **Architecture:** MoE transformer, 284B total / 13B activated parameters, hybrid attention (CSA + HCA), Manifold-Constrained Hyper-Connections (mHC), Muon optimizer, pre-trained on >32T tokens (HF card/technical report).

### Raw benchmarks found

> Verified figures below are from the Hugging Face model card for `deepseek-ai/DeepSeek-V4-Flash` (instruct model tables) unless noted. V4-Flash supports Non-Think, Think High, and Think Max modes.

Agent / tool use:

- Terminal Bench 2.0 (Acc): **49.1%** (Non-Think) / **56.6%** (High) / **56.9%** (Max)
- SWE Verified (Resolved): **73.7%** / **78.6%** / **79.0%**
- SWE Pro (Resolved): **49.1%** / **52.3%** / **52.6%**
- SWE Multilingual (Resolved): **69.7%** / **70.2%** / **73.3%**
- BrowseComp (Pass@1): **- / 53.5% / 73.2%**
- HLE w/ tools (Pass@1): **- / 40.3% / 45.1%**
- MCPAtlas (Pass@1): **64.0%** / **67.4%** / **69.0%**
- GDPval-AA (Elo): **- / - / 1395**
- Toolathlon (Pass@1): **40.7%** / **43.5%** / **47.8%**

Reasoning / knowledge:

- MMLU-Pro (EM): **83.0%** / **86.4%** / **86.2%**
- SimpleQA-Verified (Pass@1): **23.1%** / **28.9%** / **34.1%**
- Chinese-SimpleQA (Pass@1): **71.5%** / **73.2%** / **78.9%**
- GPQA Diamond (Pass@1): **71.2%** / **87.4%** / **88.1%**
- HLE (Pass@1): **8.1%** / **29.4%** / **34.8%**
- AIME 2026: **no direct row** (HMMT/IMOAnswerBench reported: HMMT 2026 Feb 40.8/91.9/94.8, IMOAnswerBench 41.9/85.1/88.4)
- HMMT Feb. 2026: **40.8%** / **91.9%** / **94.8%**
- IMOAnswerBench (Pass@1): **41.9%** / **85.1%** / **88.4%**
- Apex (Pass@1): **1.0%** / **19.1%** / **33.0%**
- Apex Shortlist (Pass@1): **9.3%** / **72.1%** / **85.7%**

Coding:

- LiveCodeBench (Pass@1): **55.2%** / **88.4%** / **91.6%**
- Codeforces (Rating): **- / 2816 / 3052**
- SWE Verified (Resolved): **73.7%** / **78.6%** / **79.0%**
- SWE Pro (Resolved): **49.1%** / **52.3%** / **52.6%**
- SWE Multilingual (Resolved): **69.7%** / **70.2%** / **73.3%**
- Terminal Bench 2.0 (Acc): **49.1%** / **56.6%** / **56.9%**

Long context:

- MRCR 1M (MMR): **37.5%** (Non-Think) / **76.9%** (High) / **78.7%** (Max)
- CorpusQA 1M (ACC): **15.5%** / **59.3%** / **60.5%**
- 1M-token context supported.

Multimodal:

- Text-only model.

### Normalized scores (1–100)

> Derived from verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Scores reflect high/max reasoning capability where available.

- **Tool use: 86/100.** Strong agentic/tool performance in high/max modes (Terminal Bench 2.0 56.6–56.9%, MCPAtlas 67.4–69.0%, BrowseComp 53.5–73.2%, HLE w/ tools 40.3–45.1%, Toolathlon 43.5–47.8%, GDPval-AA 1395).
- **Reasoning: 88/100.** Excellent reasoning in high/max modes (GPQA Diamond 87.4–88.1%, MMLU-Pro 86.4%, HLE 29.4–34.8%, HMMT Feb 2026 91.9–94.8%, IMOAnswerBench 85.1–88.4%, Apex Shortlist 72.1–85.7%).
- **Context window: 92/100.** Native 1M context with strong long-context results in high/max modes (MRCR 1M 76.9–78.7%, CorpusQA 1M 59.3–60.5%).
- **Multimodal: 40/100.** Text-only model; no multimodal input capability.
- **Coding: 90/100.** Very strong coding/agentic coding in high/max modes (LiveCodeBench 88.4–91.6%, Codeforces 2816–3052, SWE Verified 78.6–79.0%, SWE Pro 52.3–52.6%, SWE Multilingual 70.2–73.3%, Terminal Bench 2.0 56.6–56.9%).
- **Cost efficiency: 95/100.** MIT open weights and low hosted pricing (~$0.14/$0.28 per 1M) with 13B activated parameters provide excellent cost efficiency.
- **Overall Score: 79/100.** Mean of the five non-cost dims (86, 88, 92, 40, 90) = 79.2 → 79. Best fit for efficient long-context text-only reasoning, coding, and agentic workflows at high volume.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Hugging Face model card/technical report; scores are normalized 1–100 interpretations from verified benchmark figures, not official vendor scores.
- Reference URLs:
  - [DeepSeek-V4-Flash model card (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
  - Local repository metadata consulted: `model/deepseek-v4-flash/meta.json`
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
