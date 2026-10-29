# Seed 2.0 Pro (0215) — findings by GPT-6 Luna

- Source: ByteDance Seed / Volcengine Ark, Seed2.0 Pro (0215)
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Seed 2.0 Pro (0215)
- **Short description:** ByteDance Seed's hosted Pro model, positioned for long-chain reasoning and complex, robust workflows. It is the February 15 snapshot, not Seed2.0 Lite (including its April audio upgrade) or a later Seed generation.
- **Provider / access:** Volcengine Ark API. The exact endpoint is marked **“upcoming end of service”** on Volcengine's model list as of 2026-10-29; no shutdown date was shown. The listing supports Responses API and Chat API, with deep thinking, multimodal understanding, GUI tasks, function/tool calling, and structured output.
- **Release / knowledge:** The exact evaluation snapshot is labeled **Seed2.0 Pro (0215)** by ByteDance; Volcengine's API ID also encodes 260215. No separate public release announcement date or training-data cutoff was verified.
- **IDs:** `doubao-seed-2-0-pro-260215` (Volcengine Ark); official Seed benchmark label `Seed2.0 Pro (0215)`.
- **Context window:** 256,000 tokens; max input 224,000, max answer 128,000, and max reasoning chain 128,000. No exact-model retrieval benchmark found.
- **Modalities:** Text, image, and video understanding/input; text output. Volcengine lists the Pro model under multimodal/visual understanding and GUI tasks. Audio support is not listed for this Pro snapshot; ByteDance explicitly attributes the late-April audio upgrade to Lite, so it is not transferred here.
- **Pricing (as of 2026-10-29):** Volcengine's standard online inference rates are in RMB per million tokens and tier on request input length: **≤32K:** ¥3.20 input / ¥0.64 cached input / ¥16 output; **>32K–128K:** ¥4.80 / ¥0.96 / ¥24; **>128K–256K:** ¥9.60 / ¥1.92 / ¥48. Cache storage is ¥0.017 per million tokens per hour. Low-latency, low-priority, and batch modes have separate rates; the model-price page was last updated 2026-10-24. No free API tier verified.
- **Architecture:** Proprietary hosted model; parameter count and detailed architecture were not disclosed in the exact-model sources checked.

### Raw benchmarks found

Three independent public searches were followed by checks of ByteDance Seed's official [Seed2.0 model page](https://seed.bytedance.com/en/seed2) and Volcengine Ark's exact [model list](https://www.volcengine.com/docs/82379/1330310) and [model pricing](https://www.volcengine.com/docs/ark/model-pricing?lang=zh). The Seed page labels the evaluated column **Seed2.0 Pro (0215)**; no Lite or later-version scores are substituted. The official table does not publish full harness details for every evaluation.

Agent / tool use:

- BrowseComp: **77.3%**; GDPval: **54.4%**; Tob-Agent: **52.6%**; SkillsBench: **42.3%** (ByteDance official Seed2.0 comparison table).
- Terminal-Bench 2.0: **55.8%** (official Seed table). This is version 2.0, not the 2.1 metric used by the scoring rubric.
- No exact-model GDPval-AA Elo, Tau3-Banking, OSWorld, or Claw-Eval result verified.

Reasoning / knowledge:

- GPQA Diamond: **88.9%**; HLE (no tools, text-only): **32.4%**; BeyondAIME: **86.5%**; FrontierSci-Olympiad: **74.0%**; SuperGPQA: **68.7%** (ByteDance official table).

Coding:

- SWE-Bench Pro: **46.9%**; SWE Multilingual: **71.7%**; NL2Repo-Bench: **27.9%**; PaperBench: **53.8%**; Vibe Coding human evaluation: **48.4%** (ByteDance official table).
- Terminal-Bench 2.0: **55.8%** (official table). No exact-model Terminal-Bench 2.1, SciCode, or SWE-bench Verified result was verified.

Vision / video and long context:

- MMMU-Pro: **78.2**; MathVision: **88.8**; BabyVision: **60.6**; VideoMMMU: **86.9**; VideoReasonBench: **77.8** (ByteDance official table).
- The API limit is 256K context (224K maximum input); no exact-model MRCR/RULER retrieval result found.

### Normalized scores (1–100)

- **Tool use: 82/100.** BrowseComp 77.3% and GDPval 54.4% are strong, alongside Tob-Agent 52.6%; Terminal-Bench 2.0 at 55.8% is solid but below the methodology's TB2.1 frontier reference, and Tau3/Claw results are unavailable.
- **Reasoning: 89/100.** GPQA Diamond 88.9%, HLE 32.4%, and BeyondAIME 86.5% are strong; GPQA is just below the methodology's 90% frontier marker, and HLE is below 40%.
- **Context window: 75/100.** The documented 256K total window (224K max input) is in the 200K–500K tier; no retrieval score supports a higher rating.
- **Multimodal: 82/100.** Exact-model image and video input are documented, with strong VideoMMMU and MMMU-Pro scores; audio and non-text output are not verified.
- **Coding: 75/100.** SWE-Bench Pro 46.9%, Terminal-Bench 2.0 55.8%, and SWE Multilingual 71.7% show useful coding capability, but no TB2.1/SciCode score was found and SWE-Bench Pro is below the coding frontier range.
- **Cost efficiency: 91/100.** The shortest-context standard rate (¥3.20/¥16 per million) is inexpensive relative to frontier API pricing; rates rise by input-length tier, reaching ¥9.60/¥48 above 128K, and should be compared in RMB rather than using a fixed USD conversion.
- **Overall Score: 81/100.** Half-up mean of the five quality dimensions (82, 89, 75, 82, 75 = 80.6), excluding cost; strong reasoning and multimodal understanding are balanced by mid-tier coding/context scores and the API's announced upcoming retirement.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries, followed by exact-model checks of ByteDance's Seed benchmark page and Volcengine's API model list and pricing. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
