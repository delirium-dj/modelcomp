- Source: Anthropic/Claude Haiku 4.5
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's 2025-10-15 lightweight hybrid-reasoning model: Sonnet 4-class coding at ~2x the speed and ~1/3 the cost, with extended thinking and native context awareness. A distinct model; `claude-haiku-5.5`, `claude-haiku-3.5` and `claude-sonnet-4.5` are separate.
- **Provider / access:** Claude API, Amazon Bedrock, Google Cloud Vertex AI; available to all free and paid Claude users at launch; pairs with Sonnet 4.5 for complex tasks.
- **Release / knowledge:** 2025-10-15; knowledge cutoff: no verified public score found.
- **IDs:** `claude-haiku-4-5`. No free Zen ID verified.
- **Context window:** **200,000 tokens** standard, **1,000,000 tokens** for developers.
- **Modalities:** text and image in, text/code out; computer operation, chat assistants, customer service, collaborative programming; ASL-2 safety (below Sonnet 4.5 / Opus 4.1's ASL-3). No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$1 / 1M input, $5 / 1M output** (launch coverage); ~1/3 of Sonnet 4's cost.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Hybrid reasoning with an extended-thinking mode exposing internal reasoning and native context awareness.

### Raw benchmarks found

Agent / tool use:

- OSWorld (computer operation): **50.7%** — above Claude Sonnet 4's **42.2%** (comparison row, labelled)
- >2x faster than Sonnet 4 (some users reported 3.5x) — relative
- Tau3-Banking / Tau2-Bench / GDPval-AA / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Maths reasoning with Python tool: **96.3%** accuracy
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench Verified: **73.3%** — on par with Claude Sonnet 4
- SWE-bench Pro / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 200K standard / 1M developer; no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 86/100.** 50.7% OSWorld (beating Sonnet 4), >2x speed, extended thinking and native context awareness; capped by no scored τ-bench/AutomationBench figure.
- **Reasoning: 85/100.** 96.3% maths with Python and a hybrid reasoning engine; capped by no GPQA/HLE figure.
- **Context window: 89/100.** 200K standard with a 1M developer tier on a lightweight model; capped by no retrieval benchmark.
- **Multimodal: 80/100.** Image input with computer operation; capped by text/code-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 87/100.** SWE-bench Verified 73.3% — matching the mid-tier Sonnet 4 — at 1/3 the cost; capped by no Terminal-Bench / LiveCodeBench figure.
- **Cost efficiency: 94/100.** $1/$5 per 1M with >2x speed, free-tier availability and 1/3 of Sonnet 4's cost. Excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 86, 85, 89, 80, 87 = 85.4 → 85. Best fit: high-volume, low-latency coding/computer-use agents and customer service; superseded by Haiku 5.5.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Haiku 4.5 article retrieved via public web search excerpt (release, 200K/1M context, SWE-bench Verified 73.3%, OSWorld 50.7%, 96.3% maths with Python, hybrid reasoning, ASL-2, availability), plus secondary 百家号 launch coverage for the $1/$5 rate card — labelled secondary. Claude Sonnet 4's 42.2% OSWorld is a comparison row under another ID. `claude-haiku-5.5`, `claude-haiku-3.5` and Sonnet 4/4.5 are separate models, never merged. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Claude Haiku 4.5 — 百度百科 (retrieved via search excerpt; specs, benchmarks, safety)](https://baike.baidu.com/item/Claude%20Haiku%204.5/67264698)
  - [Claude「最香」模型发布 — 百家号 (retrieved via search excerpt; $1/$5 pricing)](https://baijiahao.baidu.com/s?id=1846100641676175624&wfr=spider&for=pc)
