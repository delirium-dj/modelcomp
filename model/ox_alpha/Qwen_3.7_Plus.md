# Ox Alpha — findings by Qwen 3.7 Plus

- Source: Z.AI/Ox-Alpha (`opencode/ox-alpha`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Stealth frontier reasoning model that ran anonymously on OpenRouter and OpenCode for ~12 days before Z.ai revealed it as GLM-5.3-Flash on August 26, 2026. Ox Alpha IS GLM-5.3-Flash — same weights, same benchmarks, same architecture. 320B total / 18B active MoE with native multimodal support (text/image/video in a single checkpoint). 45-layer hybrid attention (34 KDA linear + 11 NoPE sparse MLA). Terminal-Bench 2.1 84.3% is strong. DeepSWE 63.4% is the highest among flash-tier models at launch. SWE-bench (Vals) 92.0% is excellent. GDPval-AA Elo 1773 is the highest independently-evaluated score in the flash tier (verified by Artificial Analysis). GPQA Diamond 91.2% is strong. CharXiv 89.4% is excellent. AA Intelligence Index 41.8 is modest. The model topped online usage charts during its stealth run, with users discovering its strong agentic coding capabilities before Z.ai's identity reveal. Open weights under MIT license.
- **Provider / access:** OpenRouter (stealth/ox-alpha); OpenCode Zen. Open weights under MIT license: `zai-org/GLM-5.3-Flash` (Hugging Face — same weights as GLM-5.3-Flash).
- **Release / knowledge:** Stealth preview ~August 14–26, 2026; officially revealed as GLM-5.3-Flash on 2026-08-26.
- **IDs:** `opencode/ox-alpha` (OpenCode Zen); `stealth/ox-alpha` (OpenRouter stealth listing).
- **Context window:** 1,048,576 tokens (1M); 128K output.
- **Modalities:** Text, image, video, PDF in; text out. Native multimodal (24-layer ViT integrated into LM trunk).
- **Pricing (as of 2026-10-10):** Free during stealth preview. Now equivalent to GLM-5.3-Flash pricing: ~$0.37/$1.25 per 1M in/out. Free OpenCode Zen tier access for experimental agentic coding.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (Z.AI; AA) / **62.9%** (Vals AI — significant 21-point discrepancy)
- Toolathlon-Verified: **78.4%** (Z.AI)
- AutomationBench: **48.8%** (Z.AI) / **60.4%** (AA)
- GDPval-AA Elo: **1773** (Z.AI — HIGHEST independently-evaluated flash-tier score, verified by AA)
- HLE w/ tools: **55.3%** (Z.AI)
- Agents' Last Exam: **26.3%** (Z.AI)
- AA Tau3 Banking: **47.2%** (AA)
- AA Briefcase Elo: **1454** (AA)
- AA EnterpriseOps-Gym: **33.2%** (AA)
- AA ITBench: **51.2%** (AA)
- Terminal-Bench 4.0: **32.8%** (AA — latest version)
- GDP.pdf: **15.4%** (AA)

Coding:

- DeepSWE: **63.4%** (Z.AI — HIGHEST among flash tier at launch; vs. GLM-5.2 46.2%, +17.2 pts)
- Terminal-Bench 2.1: **84.3%** (Z.AI)
- SWE-bench (Vals): **92.0%** (Vals AI — excellent)
- LiveCodeBench (Vals): **80.5%** (Vals AI)
- NL2Repo: **56.3%** (Z.AI)
- AA-SciCode: **51.6%** (AA)
- FrontierSWE v2: **18.1%** (Proximal — low)
- OpenHarmony Bench: **57.3%** (OpenHarmony)
- Bug Hunt Bench: **17.7 fixes** (Bug Hunt Bench)

Multimodal:

- CharXiv: **89.4%** (Z.AI — excellent)
- Chartography (with tools): **78.0%** (Z.AI)
- MMVU: **80.5%** (Z.AI)
- OfficeQA Pro: **62.4%** (Z.AI)
- BabyVision: **53.4%** (Z.AI)
- Design Arena Website: **1278** (OpenRouter)

Reasoning / knowledge:

- AA Intelligence Index: **41.8** (AA — modest)
- GPQA Diamond: **91.2%** (AA) / **86.4%** (Vals AI)
- HLE (AA): **39.9%** (AA)
- MMLU-Pro: **86.1%** (Vals AI)
- AA-Omniscience Index: **7.5%** (AA — very low)
- AA-LCR (Long Context Reasoning): **80.0%** (AA)
- MLCR-AA: **51.1%** (AA)
- CritPt (Physics): **15.4%** (AA — low)

### Normalized scores (1–100)

- **Tool use: 81/100.** Terminal-Bench 2.1 at 84.3% is strong. Toolathlon 78.4% is solid. GDPval-AA Elo 1773 is competitive with frontier models — the highest independently-evaluated flash-tier score. AutomationBench 48.8–60.4% is moderate. However, Agents' Last Exam 26.3% is low, AA EnterpriseOps-Gym 33.2% is weak, and the Vals Terminal-Bench at 62.9% raises questions about the vendor-reported 84.3% (a 21-point discrepancy). GDP.pdf 15.4% is very low.
- **Reasoning: 62/100.** HLE w/ tools 55.3% is competitive. GPQA Diamond 91.2% (AA) is strong. MMLU-Pro 86.1% is solid. AA-LCR 80.0% is good. However, AA Intelligence Index 41.8 is modest. AA-HLE 39.9% is low. CritPt 15.4% is very low. AA-Omniscience Index 7.5% is very low.
- **Context window: 82/100.** 1M tokens total with 128K output. AA-LCR 80.0% is solid for long-context reasoning. The 1M context window is standard for frontier models. 128K output is generous.
- **Multimodal: 75/100.** CharXiv 89.4% is excellent. Chartography 78.0% is strong. MMVU 80.5% is solid. Text, image, and video input supported natively — the first GLM model with native multimodal integration (24-layer ViT directly projecting into LM hidden dimension, no separate adapter).
- **Coding: 76/100.** DeepSWE 63.4% is the highest among flash tier at launch. SWE-bench (Vals) 92.0% is excellent. Terminal-Bench 2.1 84.3% is competitive. LiveCodeBench 80.5% is solid. However, FrontierSWE v2 18.1% is very low. AA-SciCode 51.6% is modest. The Vals Terminal-Bench at 62.9% raises questions.
- **Cost efficiency: 95/100.** Free during stealth preview. Now ~$0.37/$1.25 per 1M as GLM-5.3-Flash. Free OpenCode Zen tier available. Open weights under MIT license for self-hosting at $0. Among the most cost-effective models in the dataset — frontier-class intelligence at flash-tier pricing.
- **Overall Score: 75/100.** Mean of five quality dims: (81 + 62 + 82 + 75 + 76) / 5 = 75.2. Ox Alpha is the stealth preview identity of GLM-5.3-Flash. Key strengths: DeepSWE 63.4% (HIGHEST among flash tier at launch), SWE-bench (Vals) 92.0% (excellent), Terminal-Bench 84.3% (strong), GDPval-AA Elo 1773 (HIGHEST independently-evaluated flash-tier score), Toolathlon 78.4% (solid), GPQA Diamond 91.2% (strong), CharXiv 89.4% (excellent), native multimodal (text/image/video), 1M context with 128K output, MIT-licensed open weights, free during stealth preview, ~$0.37/$1.25 pricing. Key weaknesses: AA-Omniscience Index 7.5% (very low), AA Intelligence Index 41.8 (modest), FrontierSWE v2 18.1% (very low), significant vendor-vs-vals discrepancy on Terminal-Bench (84.3% vs. 62.9%), Agents' Last Exam 26.3% (low), GDP.pdf 15.4% (very low), stealth identity may cause confusion. Best fit for: agentic coding workflows needing strong DeepSWE/SWE-bench performance at flash-tier cost, multimodal agentic tasks requiring native image/video understanding, teams wanting MIT-licensed open weights for self-hosting, cost-sensitive deployments where free/cheap frontier-class intelligence matters, and users who valued Ox Alpha during its stealth run and want to continue using the same model under its official identity. Not ideal for: knowledge-intensive tasks (very low Omniscience), frontier-difficulty coding (FrontierSWE v2), or teams confused by the stealth-to-GLM identity transition.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across Z.ai official blog, Artificial Analysis, BenchLM, Vals AI, TechCrunch, Bloomberg, CellCog, AIMLAPI, OpenRouter, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores. Ox Alpha is confirmed to be GLM-5.3-Flash (same weights, same benchmarks).
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
