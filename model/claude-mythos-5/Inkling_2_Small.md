# Claude Mythos 5 — findings by Inkling 2 Small

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's restricted-access, reduced-safeguard configuration of the Fable 5-class model, offered only to organizations verified through Anthropic's verification programs (e.g. the Cyber Verification Program) for defensive cybersecurity and life-sciences work. Same weights and specifications as Claude Fable 5. Superseded by Claude Mythos 5.2 as the current Mythos model, but still Active.
- **Provider / access:** Claude API (`claude-mythos-5`), Amazon Bedrock (`anthropic.claude-mythos-5`), Google Cloud (Claude Models on Google Cloud, Google managed), Microsoft Foundry. Verification required; Messages API.
- **Release / knowledge:** Released 2026-06-09; reliable knowledge cutoff Jan 2026.
- **IDs:** `claude-mythos-5` (Claude API); `anthropic.claude-mythos-5` (Bedrock)
- **Context window:** 1,000,000 tokens (~555k words); max output 128K tokens (300K via batch beta on select models).
- **Modalities:** text and images in; text out; adaptive thinking always on (default effort `high`); tool calls yes; JSON mode yes.
- **Pricing (as of 2026-11-10):** $10.00 / 1M input, $50.00 / 1M output; 5m cache write $12.50, 1h cache write $20.00, cache read $1.00; Batch API 50% off. Restricted to verified organizations.
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.0%** (Anthropic Claude Fable 5 / Claude Mythos 5 system card)
- OSWorld-Verified: **85%** (system card)
- BrowseComp: **88%** (system card)
- CyberGym: **83.8%** (system card)

Reasoning / knowledge:

- GPQA Diamond: **94.1%** (system card)
- HLE: **64.5%** (system card); HLE w/o tools **59%**
- USAMO 2026: **97.6%** (system card)
- Artificial Analysis Intelligence Index: not separately published per BenchLM (20 source-displayable rows, no public overall)

Coding:

- SWE-bench Verified: **95.5%** (system card)
- SWE-bench Pro: **80.3%** (system card)
- SWE-bench Multilingual: **92.2%** (system card)
- Terminal-Bench 2.1: **88.0%** (system card)
- SWE-bench Multimodal: **54.9%** (system card)

Long context:

- 1M-token window; no dedicated long-context retrieval benchmark row published separately from the system card (GraphWalks/MRCR not found) — no verified public long-context retrieval score found.

Multimodal:

- CharXiv: **93.5%** (with tools); **88.9%** (w/o tools) (system card)

### Normalized scores (1–100)

- **Tool use: 91/100.** Terminal-Bench 2.1 88%, OSWorld-Verified 85%, BrowseComp 88%, CyberGym 83.8% — elite agentic tool use across browsing, desktop, and cyber tasks; capped by unpublished GDPval-AA/AA-Briefcase rows.
- **Reasoning: 93/100.** GPQA 94.1%, USAMO 2026 97.6%, HLE 64.5% — frontier mathematical/scientific reasoning; capped by HLE w/o tools 59% and no published AA Intelligence Index overall.
- **Context window: 94/100.** 1M tokens, 128K max output; no separate public long-context retrieval score keeps this from the top tier.
- **Multimodal: 80/100.** Text + image in, text out; CharXiv 93.5% (chart understanding) but SWE-bench Multimodal only 54.9% and no audio/video I/O.
- **Coding: 94/100.** SWE-bench Verified 95.5%, Multilingual 92.2%, Pro 80.3%, Terminal-Bench 2.1 88% — best-in-class agentic coding; capped by Pro 80.3% and Multimodal SWE 54.9%.
- **Cost efficiency: 20/100.** $10/$50 per 1M — flagship-tier pricing reserved for verified organizations; no free tier.
- **Overall Score: 90/100.** (91 + 93 + 94 + 80 + 94) / 5 = 90.4 → 90. Best fit: verified defensive-cybersecurity and life-sciences organizations needing maximum capability; not for general-purpose or cost-sensitive deployment.

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Anthropic platform docs, system card via BenchLM, launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Mythos 5 — Claude Platform Docs](https://platform.claude.com/docs/en/models/mythos-5/overview)
  - [Introducing Claude Fable 5 and Claude Mythos 5 — Anthropic](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Claude Fable 5 & Claude Mythos 5 System Card (PDF) — Anthropic](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [Claude Mythos 5 — BenchLM](https://benchlm.ai/models/claude-mythos-5)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
