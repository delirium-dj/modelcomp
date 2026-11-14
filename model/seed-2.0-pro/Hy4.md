- Source: ByteDance/Doubao-Seed-2.0-Pro (豆包 2.0 Pro)
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao-Seed-2.0-Pro (a.k.a. 豆包 2.0 Pro / Seed 2.0 Pro)
- **Short description:** ByteDance's 2026-02-14 flagship general-purpose Agent model of the Doubao 2.0 generation (Pro / Lite / Mini / Code), aimed at deep reasoning and long-chain task execution. A distinct model; `doubao-seed-2.1-pro-260915`, `doubao-seed-evolving` and Doubao 2.0 Code are separate.
- **Provider / access:** 豆包 App, desktop and web ("Expert" mode); Volcano Engine APIs; ArkClaw agent platform (2026-03-09) with Day-0 adaptation; in-car integration (Roewe 07, July 2026). The Seed2.0 series (Pro / Lite / Mini) is documented on ByteDance Seed's official site.
- **Release / knowledge:** 2026-02-14 (model ID `Doubao-Seed-2.0-pro-260215`); knowledge cutoff: no verified public score found.
- **IDs:** `doubao-seed-2.0-pro-260215`. No free Zen ID verified.
- **Context window:** **256,000 tokens** (secondary CSDN generation comparison); the Doubao Pro family article mentions 128K long-text handling for the broader Pro line — both reported separately, neither vendor-verified for this exact ID.
- **Modalities:** text, image, audio and video processing across modalities (Doubao Pro family); native multimodal understanding and complex instruction execution in the 2.0 generation; text out. No verified non-text output.
- **Pricing (as of 2026-11-14):** tiered by input length — **¥3.2 / 1M input tokens for inputs ≤32K**, with output pricing in the same CNR launch report (exact output figure not in the retrieved excerpt) — no complete verified rate card found.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. System1/System2 dual-mode architecture separating intuition from reasoning (Doubao Pro family, lineage).

### Raw benchmarks found

Agent / tool use:

- Long-chain task execution and complex instruction following (directional)
- In-car / mobile OS-level agent integration (cross-app operations, background tasks, system-level privacy isolation) for the Pro family (qualitative, lineage)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- SuperCLUE 2025 Chinese general evaluation: **69.16** — **#1 in China, #2 globally** (secondary Zhihu evaluation report)
- Chinese composite real-world evaluation: **76.5% accuracy, #1** (secondary Zhihu hands-on, unnamed benchmark)
- IMO / CMO-level maths and competition performance referenced in the Doubao 2.0 article (directional, no exact scores in the retrieved excerpt)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- Doubao 2.0 Code is a separate SKU; no Pro-specific coding benchmark in the retrieved sources — no verified public score found
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 256K (secondary) / 128K long-text (family lineage); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** General-purpose Agent design with long-chain execution, ArkClaw/Volcano Engine distribution and OS-level cross-app agent integration; capped by no scored agent harness.
- **Reasoning: 88/100.** SuperCLUE 69.16 (#1 China / #2 global) and a 76.5% #1 Chinese composite result, plus competition-maths positioning; capped by those figures being secondary with unnamed harnesses.
- **Context window: 84/100.** 256K (secondary) / 128K (family) long-text handling; capped by conflicting figures and no retrieval benchmark.
- **Multimodal: 86/100.** Text/image/audio/video processing across the Pro family with native 2.0-generation multimodal understanding; capped by no verified 2.0-Pro-specific modality benchmark and text-only output.
- **Coding: 80/100.** General coding/agent capability of the generation; capped by zero published Pro-specific coding benchmark scores.
- **Cost efficiency: 88/100.** ¥3.2 / 1M input for ≤32K prompts — roughly 1/35 to 1/40 of overseas flagship pricing per secondary market analysis; excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 85, 88, 84, 86, 80 = 84.6 → 85. Best fit: cost-sensitive Chinese-language deep reasoning, long-chain agent workflows and consumer/in-car assistant deployments.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike 豆包2.0 Pro and 豆包2.0 articles retrieved via public web search excerpt (release, Pro/Lite/Mini/Code lineup, Expert mode, ArkClaw), the Baidu Baike 豆包通用模型Pro excerpt (Pro family modalities, 128K, System1/System2), CNR launch coverage for the ¥3.2/≤32K pricing, and secondary Zhihu/CSDN reports for SuperCLUE 69.16, the 76.5% composite and the 256K context — all explicitly labelled secondary. ByteDance Seed's official Seed2.0 page excerpt confirms the Pro/Lite/Mini lineup. Figures from Doubao 2.0 Code, Seed 2.1 Pro and the broader Pro family are labelled lineage, never merged. Directional claims are not assigned numeric scores; rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [豆包2.0 Pro — 百度百科 (retrieved via search excerpt; release, positioning, access)](https://baike.baidu.com/item/豆包2.0%20Pro/67384079)
  - [豆包2.0 — 百度百科 (retrieved via search excerpt; Pro/Lite/Mini/Code lineup)](https://baike.baidu.com/item/豆包2.0/67351233)
  - [豆包大模型2.0发布 — 央广网 (retrieved via search excerpt; ¥3.2 pricing)](https://www.cnr.cn/mspd/zhsh/20260214/t20260214_527526933.shtml)
