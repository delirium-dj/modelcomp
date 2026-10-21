# Kimi K2.6 — findings by Muse Glimmer 30B

- Source: Moonshot AI/Kimi K2.6 (`opencode/kimi-k2.6`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's open-weight 1.06T/32B multimodal MoE with 262K context for long-horizon coding and 300-agent swarms; live, $0.95/$4.00.
- **Provider / access:** Moonshot Open Platform `kimi-k2.6` Chat Completions; OpenRouter `moonshotai/kimi-k2.6`; OpenCode Zen `opencode/kimi-k2.6`. No Zen Free ID.
- **Release / knowledge:** 2026-04-20 GA; knowledge cutoff not publicly stated.
- **IDs:** `opencode/kimi-k2.6` (OpenCode Zen), `kimi-k2.6` (Moonshot API)
- **Context window:** 262,144 tokens total (256K); ~236K out per meta.json; verified by Hugging Face model card and Moonshot blog.
- **Modalities:** Text, image in; text out; reasoning toggleable; tool calls yes; JSON mode supported. Per meta.json multimodal is image-in only.
- **Pricing (as of 2026-10-20):** $0.95/$4.00 per 1M input/output; $0.16 cached. OpenRouter $0.80/$3.40. Paid, no free tier.
- **Architecture:** Mixture-of-Experts, 1T total / 32B active parameters, 384 experts, 8 activated per token, 61 layers, open weights Modified MIT license. Vision encoder MoonViT 400M.

### Raw benchmarks found

> Values from Hugging Face model card `moonshotai/Kimi-K2.6` evaluation table and Moonshot tech blog 2026-04-20.

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2): **66.7%** (Hugging Face model card)
- Terminal-Bench 2.1 Vals harness: **53.6%** (Big Pickle cross-check)
- BrowseComp Pass@1: **83.2%**; BrowseComp Agent Swarm: **86.3%**
- OSWorld-Verified: **73.1%**
- Toolathlon: **50.0%**
- MCPMark: **55.9%**
- Claw Eval pass@3: **80.9%**; pass^3: **62.3%**
- GDPval-AA: **1115 Elo** normalized 26.3%
- HLE-Full w/ tools: **54.0%**

Reasoning / knowledge:

- GPQA Diamond: **90.5%** (Hugging Face eval results)
- HLE-Full: **34.7%** text-only; **54.0%** w/ tools
- AIME 2026: **96.4%**
- HMMT 2026 Feb: **92.7%**
- IMO-AnswerBench: **86.0%**
- AA-LCR long-context reasoning: **81.0%**
- CritPt: **8.0%** (weakness)

Coding:

- SWE-bench Verified: **80.2%**
- SWE-bench Pro: **58.6%**
- SWE-bench Multilingual: **76.7%**
- LiveCodeBench v6: **89.6%**
- SciCode: **52.2%**
- OJBench Python: **60.6%**
- Terminal-Bench 2.0 coding: **66.7%**

Long context:

- 262,144 token window verified; AA-LCR 81.0% published. No MRCR/RULER public score found.

Vision:

- MMMU-Pro: **79.4%** (80.1% w/ python)
- CharXiv RQ: **80.4%** (86.7% w/ python)
- MathVision: **87.4%** (93.2% w/ python)
- V* w/ python: **96.9%**

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.0 66.7% and 2.1 53.6% land mid-band; Toolathlon 50.0%, MCPMark 55.9% confirm real tool reliability. BrowseComp 83.2% and OSWorld-Verified 73.1% lift the band, capped by APEX-Agents low scores and GDPval-AA 1115 Elo.
- **Reasoning: 84/100.** GPQA Diamond 90.5% clears frontier marker, AIME 96.4% and HMMT 92.7% show strong math. Held below 90 by HLE-Full 34.7% text-only, CritPt 8.0%, AA-Omniscience factual accuracy ~32.6%, and Intelligence Index ~45.
- **Context window: 78/100.** Verified 262,144 tokens with ~236K output places model in 200K–500K tier; automatic compression and 12-hour session claims support upper half. Capped by lack of ≥1M tier and only LCR published.
- **Multimodal: 70/100.** Meta.json lists text + image in, text out. Vision benchmarks MMMU-Pro 79.4%, CharXiv 80.4%, MathVision 87.4% support image-in capability at mid-high level. No audio input or non-text output per curated meta.
- **Coding: 82/100.** SWE-bench Verified 80.2% and LiveCodeBench 89.6% are strong; SciCode 52.2% near frontier threshold. Capped by SWE-bench Pro 58.6% and AA Coding Index 61.8%.
- **Cost efficiency: 90/100.** $0.95/$4.00 per 1M with $0.16 cache hit is low for 1T open-weights agentic model; OpenRouter $0.80/$3.40 improves further. Paid tier, no free ID.
- **Overall Score: 77/100.** Mean of five quality dims (70+84+78+70+82)/5 = 76.8 → 77. Best fit: cost-effective open-weights multimodal agentic model for long-horizon coding and image-driven tasks; pair with 1M-context models for deeper retrieval.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research via Hugging Face model card `moonshotai/Kimi-K2.6`, Moonshot tech blog `kimi-k2-6.html`, and meta.json basics. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
