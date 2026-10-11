# ByteDance Seed 2.0 Pro — findings by Qwen 3.7 Plus

- Source: ByteDance/Seed-2.0-Pro (`deepinfra/ByteDance/Seed-2.0-pro`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's flagship frontier multimodal reasoning model from the Seed 2.0 family (Pro/Lite/Mini), released February 14, 2026. Powers Doubao (China's #1 AI chatbot, 155M weekly active users). AIME 2025 98.3% (near-perfect). Codeforces 3020 (international competition gold medalist). LiveCodeBench v6 87.8%. Exceptional video understanding: VideoMME 89.5%, VideoMMMU 86.9%. SOTA MathVision 88.8%. Strong agentic: BrowseComp 77.3%, WideSearch 74.7%. Strong computer use: OSWorld-Verified 78%. LMSYS Arena #6 text, #3-4 vision. SWE-Bench Verified 76.5%. Very competitive pricing (~3.7x cheaper than GPT-5.2 on input). GPQA Diamond 88.9%.
- **Provider / access:** BytePlus/Volcengine API (`deepinfra/ByteDance/Seed-2.0-pro`); also available via DeepInfra, EvoLink, and other providers. Proprietary model.
- **Release / knowledge:** Released February 14, 2026. Knowledge cutoff not precisely documented.
- **IDs:** `deepinfra/ByteDance/Seed-2.0-pro` (DeepInfra); `seed-2-0-pro` (BytePlus/Volcengine); also available via EvoLink and other aggregators.
- **Context window:** 256,000 tokens (256K); 65,536 output tokens (65K out).
- **Modalities:** Text, image, video in; text out. Supports complex visual inputs including hour-long video understanding.
- **Pricing (as of 2026-10-10):** ~$0.47 per 1M input tokens; ~$2.35-2.37 per 1M output tokens. Approximately 3.7x cheaper than GPT-5.2 ($1.75/$14.00) on input, ~5.9x cheaper on output. ~10x cheaper than Claude Opus 4.5 ($5.00/$25.00). Among the most cost-effective frontier models.

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **77.3%** (ByteDance — strong web browsing)
- WideSearch: **74.7%** (ByteDance — strong breadth-first search)
- OSWorld-Verified: **78.0%** (ByteDance — strong computer use)
- MobileWorld: **56.4%** (ByteDance — moderate mobile use)
- Tob-Agent: **52.6%** (ByteDance — moderate)
- GDPval: **54.4%** (ByteDance — moderate real-world work)
- Real World Skills Bench: **42.3%** (ByteDance — moderate-low)
- Terminal Bench 2.0: **55.8%** (ByteDance — moderate)

Coding:

- Codeforces: **3020** (ByteDance — international competition gold medalist)
- LiveCodeBench v6: **87.8%** (ByteDance — excellent)
- SWE-Bench Verified: **76.5%** (ByteDance — strong)
- SWE Multilingual: **71.7%** (ByteDance — strong multilingual coding)
- PaperBench: **53.8%** (ByteDance — moderate)
- SWE-Bench Pro: **46.9%** (ByteDance — moderate)
- Vibe Coding (human eval): **48.4%** (ByteDance — moderate-low)
- NL2Repo-Bench: **27.9%** (ByteDance — low)

Multimodal:

- CharXiv-DQ: **93.5%** (ByteDance — excellent chart understanding)
- VideoMME: **89.5%** (ByteDance — exceptional long-video understanding)
- MathVision: **88.8%** (ByteDance — SOTA math visual reasoning)
- VideoMMMU: **86.9%** (ByteDance — strong video understanding)
- MMMU: **85.4%** (ByteDance — strong multimodal reasoning)
- LongVideoBench: **80.3%** (ByteDance — strong long-video)
- MMMU-Pro: **78.2%** (ByteDance — strong professional multimodal)
- HiPhO: **74.1%** (ByteDance — strong)
- SimpleVQA: **71.4%** (ByteDance — moderate)
- ERQA: **68.5%** (ByteDance — moderate embodied reasoning)
- MedXpertQA-MM: **68.1%** (ByteDance — moderate medical multimodal)
- BabyVision: **60.6%** (ByteDance — moderate)
- VLMBias: **77.4%** (ByteDance — strong bias resistance)
- CharXiv-RQ: **80.5%** (ByteDance — strong chart reasoning)
- WorldVQA: **49.9%** (ByteDance — moderate-low)

Video understanding (specialized):

- VideoReasonBench: **77.8%** (ByteDance — strong)
- OVOBench: **77.0%** (ByteDance — strong)
- LiveSports-3K: **78.0%** (ByteDance — strong)
- Minerva: **66.5%** (ByteDance — moderate)
- VideoHolmes: **67.4%** (ByteDance — moderate)
- SciVideo: **52.3%** (ByteDance — moderate)
- TVBench: **75.0%** (ByteDance — strong)
- MotionBench: **75.2%** (ByteDance — strong motion perception)
- EgoTempo: **71.8%** (ByteDance — strong)
- ContPhy: **67.4%** (ByteDance — moderate)
- LVBench: **76.4%** (ByteDance — strong)

Reasoning / knowledge:

- AIME 2025: **98.3%** (ByteDance — near-perfect)
- AIME 2026: **94.2%** (ByteDance — exceptional)
- HMMT Feb: **97.3%** (ByteDance — exceptional)
- BeyondAIME: **86.5%** (ByteDance — strong)
- GPQA Diamond: **88.9%** (ByteDance — strong)
- MMLU-Pro: **87.0%** (ByteDance — strong)
- FrontierSci-olympiad: **74.0%** (ByteDance — strong)
- HLE-Verified: **73.6%** (ByteDance — strong)
- SuperGPQA: **68.7%** (ByteDance — moderate-strong)
- HLE (no tool, text only): **32.4%** (ByteDance — low)
- Superchem (text-only): **51.6%** (ByteDance — moderate)
- BABE: **53.5%** (ByteDance — moderate)

Instruction following:

- CL-Bench: **20.8%** (ByteDance — low)
- MultiChallenge: **68.3%** (ByteDance — moderate)

Research tasks:

- Research Rubrics: **50.7%** (ByteDance — moderate)
- XPert Bench: **64.5%** (ByteDance — moderate-strong)
- FinSearchComp: **70.2%** (ByteDance — strong financial search)

LMSYS Chatbot Arena: **#6 Text, #3-4 Vision** (as of February 2026)

### Normalized scores (1–100)

- **Tool use: 68/100.** BrowseComp 77.3% is strong. WideSearch 74.7% is strong. OSWorld-Verified 78% is strong (computer use). MobileWorld 56.4% is moderate (mobile use). Terminal Bench 2.0 55.8% is moderate. GDPval 54.4% is moderate. Tob-Agent 52.6% is moderate. Real World Skills Bench 42.3% is moderate-low. The model excels at web browsing and computer use but is moderate on mobile and real-world agentic tasks.
- **Reasoning: 78/100.** AIME 2025 98.3% is near-perfect. AIME 2026 94.2% is exceptional. HMMT Feb 97.3% is exceptional. BeyondAIME 86.5% is strong. GPQA Diamond 88.9% is strong. MMLU-Pro 87% is strong. FrontierSci-olympiad 74% is strong. HLE-Verified 73.6% is strong. However, HLE (no tool, text only) 32.4% is low. Superchem 51.6% is moderate. BABE 53.5% is moderate. CL-Bench 20.8% is low. The reasoning profile is exceptional for math competition problems and strong for graduate-level knowledge, with weaker performance on open-domain chemistry and instruction-following tasks.
- **Context window: 62/100.** 256K context with 65K output. The 256K window is moderate by frontier standards (many peers offer 400K-1M). 65K output is moderate. Adequate for most tasks but not class-leading.
- **Multimodal: 84/100.** VideoMME 89.5% is exceptional (hour-long video). MathVision 88.8% is SOTA. CharXiv-DQ 93.5% is excellent. VideoMMMU 86.9% is strong. MMMU 85.4% is strong. LongVideoBench 80.3% is strong. MotionBench 75.2% is strong. TVBench 75% is strong. LVBench 76.4% is strong. ERQA 68.5% is moderate. MedXpertQA-MM 68.1% is moderate. Text + image + video input supported. The multimodal profile is genuinely exceptional, especially for video understanding (hour-long videos) and mathematical visual reasoning. LMSYS Vision Arena #3-4 confirms strong visual capabilities.
- **Coding: 72/100.** Codeforces 3020 is gold medalist level (exceptional). LiveCodeBench v6 87.8% is excellent. SWE-Bench Verified 76.5% is strong. SWE Multilingual 71.7% is strong. However, SWE-Bench Pro 46.9% is moderate. PaperBench 53.8% is moderate. Vibe Coding 48.4% is moderate-low. NL2Repo-Bench 27.9% is low. Terminal Bench 2.0 55.8% is moderate. The coding profile is exceptional for competitive programming (Codeforces 3020) and strong for live coding, but moderate for autonomous SWE tasks.
- **Cost efficiency: 90/100.** ~$0.47/$2.37 per 1M. Approximately 3.7x cheaper than GPT-5.2 ($1.75/$14.00) on input, ~5.9x cheaper on output. ~10x cheaper than Claude Opus 4.5 ($5.00/$25.00). Among the most cost-effective frontier models available. The combination of frontier-level performance (AIME 98.3%, Codeforces 3020, VideoMME 89.5%) at ~3.7x cheaper than GPT-5.2 is remarkable value.
- **Overall Score: 72.8/100.** Mean of five quality dims: (68 + 78 + 62 + 84 + 72) / 5 = 72.8. ByteDance Seed 2.0 Pro is the flagship model from ByteDance's Seed team, powering Doubao (155M weekly active users). Key strengths: AIME 2025 98.3% (near-perfect), AIME 2026 94.2% (exceptional), HMMT Feb 97.3% (exceptional), Codeforces 3020 (intl competition gold medalist), LiveCodeBench v6 87.8% (excellent), VideoMME 89.5% (exceptional hour-long video), MathVision 88.8% (SOTA), CharXiv-DQ 93.5% (excellent), GPQA Diamond 88.9% (strong), MMLU-Pro 87% (strong), OSWorld-Verified 78% (strong computer use), BrowseComp 77.3% (strong), WideSearch 74.7% (strong), SWE-Bench Verified 76.5% (strong), LMSYS Arena #6 text / #3-4 vision, MotionBench 75.2% (strong), VideoMMMU 86.9% (strong), LongVideoBench 80.3% (strong), very competitive pricing (~3.7x cheaper than GPT-5.2). Key weaknesses: 256K context (moderate by frontier standards), 65K output (moderate), SWE-Bench Pro 46.9% (moderate), NL2Repo-Bench 27.9% (low), CL-Bench 20.8% (low instruction following), HLE (no tool) 32.4% (low), Superchem 51.6% (moderate), BABE 53.5% (moderate), Real World Skills Bench 42.3% (moderate-low), Vibe Coding 48.4% (moderate-low), no native audio support in Pro variant. Best fit for: mathematical reasoning (AIME 98.3%, HMMT 97.3%), competitive programming (Codeforces 3020), video understanding (VideoMME 89.5%, hour-long videos), mathematical visual reasoning (MathVision 88.8% SOTA), cost-sensitive frontier deployments (~3.7x cheaper than GPT-5.2), computer-use agents (OSWorld 78%), multilingual coding (SWE Multilingual 71.7%). Not ideal for: long-context work beyond 256K, autonomous SWE (SWE-Bench Pro 46.9%, NL2Repo 27.9%), instruction-following-heavy tasks (CL-Bench 20.8%), chemistry-domain tasks (Superchem 51.6%), tasks requiring native audio input.

---

## Signature

- Provided by: **Qwen 3.7 Plus (Qwen/Qwen3.7-Plus)** — 2026-10-10
- Method: public internet research across ByteDance Seed official site, ByteDance Seed 2.0 Model Card, Apiyi.com comparison guide, EvoLink review, LMSYS Chatbot Arena, Artificial Analysis, and other benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.7_Plus.md`, using the same headings.
