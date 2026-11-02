# Claude Opus 4.7 — findings by GLM 5.3 Flash

- Source: Anthropic (`claude-opus-4-7`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April-2026 Opus — a long-horizon agentic coding and computer-use flagship that introduced Glasswing-derived cyber safeguards; two Opus generations later it is a legacy-priced incumbent.
- **Provider / access:** Claude API `claude-opus-4-7` (Messages API, adaptive/extended thinking, effort control, Batch, prompt caching, research-preview Fast mode); Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry; resellers from ~$4.29/$21.46 (Poe).
- **Release / knowledge:** Released 2026-04-16; superseded by Opus 4.8 (2026-05-28), Opus 5 and Opus 5.5 within the same year.
- **IDs:** `claude-opus-4-7` (Claude API, Bedrock, Vertex, Foundry). No Free ID exists on Zen — paid only.
- **Context window:** 1,000,000 tokens total / 128K max output — verified via the launch announcement and pricing docs; full 1M context billed at standard per-token rates.
- **Modalities:** Text and images in; text out. Thinking with effort levels; tool calls / MCP; JSON structured output; no audio or video input.
- **Pricing (as of 2026-11-02):** $5 in / $25 out per 1M tokens (≤200K prompts); long prompts (>200K) bill at $10 in / $37.50 out; cache read $0.50; cache writes $6.25 (5m) / $10 (1h); Batch API 50% off; Fast mode research preview $30/$150.
- **Architecture:** Proprietary closed weights; hybrid reasoning premium tier.

### Raw benchmarks found

Agent / tool use:

- OSWorld-Verified: **78.0%** (vendor); MCP-Atlas: **77.3%** (vendor; 79.1 deep-thinking per Epoch hub)
- BrowseComp: **79.3%** (vendor); τ²-bench Telecom: **88.6%**; τ³-Banking: **40.2%** (aggregator/AA)
- Terminal-Bench 2.0: **69.4%** (Terminus-2, thinking disabled, vendor); Terminal-Bench Hard: **51.5–54.5%** (aggregators)
- Finance Agent v1.1: **64.4%** (vendor, SOTA at launch); Finance Agent v2: **51.5%**
- GDPval-AA v2.1: **Elo 1396**; AA Briefcase v1.1: **Elo 1252** (aggregators)
- AutomationBench: **13.4%** (Epoch hub — weak); Agents' Last Exam: **21.1%** (limited comparability)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (vendor; AA re-run 91.41%)
- ARC-AGI-2: **75.8%** (max, no tools); ARC-AGI-1: **93.5%**
- HLE: **54.7%** with tools / **46.9%** without (vendor)
- FrontierMath: T1–3 **43.8%**, Tier 4 **22.9%** (no tools); Epoch v2 with tools **70.2%** / T4v2 **31.7%**
- AA CritPt: **12.0%** (weak); AA LCR v1.1: **78.7%**; AA Omniscience: **48.88%**

Coding:

- SWE-bench Verified: **87.6%** (vendor, memorization-screened)
- SWE-bench Pro: **64.3%** (vendor)
- Terminal-Bench 2.0: **69.4%** (vendor); Terminal-Bench 2.1 readings vary by harness: **83.1%** (aggregator Terminus-style) vs **69.7%** (thinking-high, rank 43/61)
- FrontierSWE: **63.0%** (llmboard); Vibe Code Bench v1.1: **71.0%**; CursorBench: **70%** (partner eval); FrontierCode 1.1: **38.5%**
- LiveBench: **76.91%**; LiveCodeBench: no verified public score found

Long context:

- No vendor MRCR / RULER / GraphWalks score found; aggregator long-context memory probes are weak (Context Arena 46.7, EBR-bench 19.1).

Vision (differentiating): CharXiv-R **91.0%** (with tools), XBOW Visual Acuity **98.5%** (partner eval), MMMU-Pro **78.8%**.

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid OSWorld 78.0, MCP-Atlas 77.3–79.1 and launch-SOTA Finance Agent 64.4; capped by AutomationBench 13.4, τ³-Banking 40.2 and GDPval-AA 1396 against the current field.
- **Reasoning: 86/100.** GPQA 94.2 and ARC-AGI-2 75.8 stay strong; capped by HLE 46.9 without tools, FrontierMath T4 22.9 and CritPt 12.0.
- **Context window: 85/100.** Verified 1M-token window at standard rates, but no published retrieval benchmark and weak third-party memory probes (EBR 19.1).
- **Multimodal: 72/100.** Image+PDF input with CharXiv-R 91.0 and XBOW 98.5; capped by text-only output and no audio/video input.
- **Coding: 84/100.** SWE-bench Verified 87.6 and SWE-Pro 64.3 age well; capped by Terminal-Bench 2.0 69.4 (harness-dependent 2.1 readings), FrontierCode 38.5, and two newer Opus generations now ahead.
- **Cost efficiency: 52/100.** $5/$25 legacy list unchanged while Opus 5.5 ($4/$20) outperforms it across current agentic boards; batch 50% and $0.50 cache reads soften but do not close the gap.
- **Overall Score: 82/100.** (82+86+85+72+84)/5 = 409/5 = 81.8 → 82. Best fit: hard, long-horizon agentic coding and document/finance knowledge work on 4.7-pinned stacks; not the pick for new work or tight budgets.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Introducing Claude Opus 4.7](https://www.anthropic.com/news/claude-opus-4-7)
  - [llm-stats — Claude Opus 4.7 launch analysis](https://llm-stats.com/blog/research/claude-opus-4-7-launch)
  - [LLMLearner — Opus 4.7 benchmark snapshot (Epoch hub data)](https://llmlearner.com/models/claude-opus-4-7)
  - [llmboard — Claude Opus 4.7 benchmark table](https://www.llmboard.ai/models/claude-opus-4-7)
  - [Verdent — Opus 4.7 vs 4.6 agentic coding comparison](https://www.verdent.ai/guides/claude-opus-4-7-vs-4-6-coding-agents)
  - [AI/TLDR — Opus 4.7 specs, benchmarks & pricing](https://ai-tldr.dev/models/claude-opus-4-7/)
