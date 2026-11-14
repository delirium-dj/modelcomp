- Source: Anthropic/Claude Sonnet 4
- Date: 2026-11-14 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4
- **Short description:** Anthropic's 2025-05-23 enterprise "all-round workhorse" of the Claude 4 series, with a hybrid reasoning engine (near-instant vs extended thinking). A distinct model; Sonnet 3.7 / 4.5 / 4.6 / 5 and Opus 4 are separate.
- **Provider / access:** Anthropic API, Amazon Bedrock, GitHub Copilot (chosen as its agent core model), Microsoft 365 Copilot Researcher agent and Copilot Studio (Sept 2025), deep IDE integration.
- **Release / knowledge:** 2025-05-23; knowledge cutoff: no verified public score found.
- **IDs:** `claude-sonnet-4`. No free Zen ID verified.
- **Context window:** **200,000 tokens** at launch; expanded to **1,000,000 tokens** in the API from August 2025 (secondary 百家号 coverage) — both reported separately.
- **Modalities:** text and image in, text/code out; code processing, reasoning, parallel tool execution, memory-file maintenance, automated code review, financial-report parsing; ASL-3 safety with harmful-content detection and cyber defences. No verified audio/video input or non-text output.
- **Pricing (as of 2026-11-14):** **$3 / 1M input, $15 / 1M output**.
- **Architecture:** Proprietary, closed weights; parameter count not disclosed. Hybrid reasoning engine switchable between near-instant and extended thinking.

### Raw benchmarks found

Agent / tool use:

- Parallel tool execution and memory-file maintenance (qualitative)
- GitHub Copilot agent core model selection (adoption, not a benchmark)
- Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / Terminal-Bench / AutomationBench / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Maths test accuracy: **96.2%** (unnamed benchmark in the Baike article)
- Programming capability **+10.4%** over the prior generation (relative)
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience: no verified public score found

Coding:

- SWE-bench: **72.7%** (Baike, harness named as SWE-bench without a Verified suffix)
- SWE-bench Verified / Terminal-Bench / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- 200K launch / 1M from Aug 2025 (secondary); no MRCR / RULER / GraphWalks figure found — no verified public score found

### Normalized scores (1–100)

- **Tool use: 85/100.** Parallel tool execution, memory-file maintenance, a hybrid reasoning switch and selection as GitHub Copilot's agent core model; capped by no scored agent harness.
- **Reasoning: 85/100.** 96.2% maths accuracy and a hybrid reasoning engine with extended thinking; capped by the maths harness being unnamed and no GPQA/HLE figure.
- **Context window: 87/100.** 200K at launch expanded to 1M in the API (secondary); capped by conflicting figures and no retrieval benchmark.
- **Multimodal: 80/100.** Image input with code review and financial-report parsing; capped by text/code-only output, no verified audio/video input, and no multimodal benchmark score.
- **Coding: 87/100.** 72.7% SWE-bench and a +10.4% generational coding gain with deep IDE integration; capped by the harness lacking a "Verified" qualifier and no Terminal-Bench figure.
- **Cost efficiency: 84/100.** $3/$15 per 1M with a broad cloud/IDE ecosystem at Sonnet-tier pricing; excluded from Overall.
- **Overall Score: 85/100.** Half-up mean of 85, 85, 87, 80, 87 = 84.8 → 85. Best fit: enterprise agentic coding and code review inside Copilot/IDE workflows; superseded by Sonnet 4.5 → 5.5.

---

## Signature

- Provided by: **Hy4 (tencent/hy4)** — 2026-11-14 UTC
- Method: Fresh public-web research this pass, conducted independently (no peer findings files consulted). Primary evidence: the Baidu Baike Claude Sonnet 4 article retrieved via public web search excerpt (release, 200K context, $3/$15 pricing, SWE-bench 72.7%, 96.2% maths, +10.4% coding, ASL-3, GitHub/Microsoft integrations), plus a secondary 百家号 article for the Aug-2025 1M context expansion — labelled secondary. Claude Sonnet 4.5/4.6 and Opus 4 figures are separate models, never merged. The maths benchmark is unnamed in the source and is labelled as such. Rows without verified figures are marked "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs: only URLs actually retrieved this pass.
  - [Claude Sonnet 4 — 百度百科 (retrieved via search excerpt; specs, benchmarks, integrations)](https://baike.baidu.com/item/Claude%20Sonnet%204/65713743)
  - [Claude Sonnet 4 百万 Token 上下文 — 百家号 (retrieved via search excerpt; secondary 1M context)](https://baijiahao.baidu.com/s?id=1840323154520229796&wfr=spider&for=pc)
