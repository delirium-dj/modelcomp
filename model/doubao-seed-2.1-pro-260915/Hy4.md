- Source: ByteDance/Doubao-Seed-2.1-pro-0915
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Doubao-Seed-2.1-pro-0915 (豆包大模型 2.1 Pro, 0915 version)
- **Short description:** The 2026-09-16 version upgrade of ByteDance's Seed 2.1 Pro flagship (originally 2026-06-23), with a 1M context and 256K deep-thinking budget for long-horizon agents. A distinct tracked version; `seed-2.0-pro`, `doubao-seed-evolving` and Seed 2.1 Turbo are separate.
- **Provider / access:** Volcano Engine 方舟 API (fully rolled out), 豆包工作 (Doubao Work), TRAE; native app on Huawei HarmonyOS PC (2026-10-08).
- **Release / knowledge:** base 2026-06-23, 0915 update 2026-09-16; knowledge cutoff: no verified public score found.
- **IDs:** `doubao-seed-2.1-pro-0915`. No free Zen ID verified.
- **Context window:** **1,000,000 tokens**, with **256K deep-thinking budget** (secondary launch coverage); the Seed 2.1 series article gives base-series benchmarks — reported as series-level, not necessarily 0915-specific.
- **Modalities:** text and image in, text/code out; coding, agents, multimodal understanding, engineering-drawing recognition (85–90% key-dimension accuracy in a secondary CSDN hands-on), screenshot-to-code, 3D/parametric script generation. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **¥6 / 1M input, ¥30 / 1M output, ¥1.2 / 1M cached hit** (launch coverage); ~**80% lower** overall cost than Claude Opus 4.6; Turbo is half price (¥3/¥15). Daily token volume **180 trillion** (June 2026, series-level).
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Deep-thinking and context caching; three upgrade axes (coding, agents, multimodal understanding).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **71.0** (Seed 2.1 series Baike article, Pro version)
- NL2Repo-Bench (repository generation): **47.0**
- Long-horizon agent execution with visual/agent improvements in the 0915 build (directional)
- Screenshot-to-code visual fidelity: **75%** and **93%** on two cases (secondary CSDN hands-on, labelled)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- SciCode (scientific computing programming): **59.8**
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found for this exact ID

Coding:

- Terminal-Bench 2.1 **71.0**, SciCode **59.8**, NL2Repo-Bench **47.0** as above (series-level, labelled)
- SWE-bench Verified / LiveCodeBench / Vibe Code Bench / DeepSWE / FrontierSWE: no verified public score found

Long context:

- 1M context with 256K thinking (secondary); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** 71.0 Terminal-Bench 2.1, 47.0 NL2Repo-Bench, long-horizon agent execution and strong screenshot-to-code fidelity; capped by the figures being series-level rather than 0915-specific.
- **Reasoning: 85/100.** SciCode 59.8 with a 256K deep-thinking budget; capped by no GPQA/HLE figure for this exact ID.
- **Context window: 92/100.** 1M context with 256K thinking and context caching at ¥1.2 cache hits; capped by no retrieval benchmark.
- **Multimodal: 87/100.** Image/drawing understanding, 85–90% key-dimension accuracy on drawings (secondary) and screenshot-to-code; capped by text/code-only output, no verified audio/video input, and no standard multimodal benchmark.
- **Coding: 88/100.** Terminal-Bench 2.1 71.0, SciCode 59.8, NL2Repo 47.0 and three-product integration; capped by no SWE-bench figure and series-level provenance.
- **Cost efficiency: 93/100.** ¥6/¥30 per 1M with ¥1.2 cache hits, ~80% below Opus 4.6 and half-price Turbo option. Excluded from Overall.
- **Overall Score: 88/100.** Half-up mean of 88, 85, 92, 87, 88 = 88.0 → 88. Best fit: cost-sensitive long-horizon coding agents, engineering-drawing understanding and screenshot-to-code workflows in Chinese enterprise settings.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike 豆包大模型2.1 Pro and 豆包 Seed 2.1系列 articles retrieved via public web search excerpt (release/0915 update, Terminal-Bench 2.1 71.0, SciCode 59.8, NL2Repo-Bench 47.0, 180T daily tokens, TRAE/HarmonyOS integrations), plus secondary launch coverage (中国经营网 / 百家号 for ¥6/¥30/¥1.2 pricing and 1M/256K context; CSDN for screenshot-to-code fidelity and drawing accuracy) — all labelled secondary. Series-level benchmark figures are labelled as such, not claimed as 0915-specific. `seed-2.0-pro`, `doubao-seed-evolving` and Seed 2.1 Turbo are separate identities, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [豆包大模型2.1 Pro — 百度百科 (retrieved via search excerpt; 0915 update, integrations)](https://baike.baidu.com/item/%E8%B1%86%E5%8C%85%E5%A4%A7%E6%A8%A1%E5%9E%8B2.1%20Pro/68086478)
  - [豆包 Seed 2.1系列 — 百度百科 (retrieved via search excerpt; Terminal-Bench, SciCode, NL2Repo)](https://baike.baidu.com/item/豆包%20Seed%202.1系列/68084170)
  - [豆包大模型2.1 Pro 发布 — 百家号 (retrieved via search excerpt; pricing)](https://baijiahao.baidu.com/s?id=1868774146016797237&wfr=spider&for=pc)
