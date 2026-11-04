# Claude Mythos 5 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-mythos-5`)
- Date: 2026-11-04 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5
- **Short description:** Anthropic's **June-2026 cyber-defense flagship** (Project Glasswing / Cyber Verification Program) — **Claude Fable 5 weights with security refusals lifted** for vetted defenders, so it assists on offensive/defensive cybersecurity work a general-public Claude declines. Frontier-class across the board (**SWE-bench Verified 95.5% / GPQA 94.1% / USAMO 2026 97.6%**) at **1M / 128K** context — but **restricted-access** (not a general-public model) and **premium $10/$50** pricing.
- **Provider / access:** Anthropic API `anthropic/claude-mythos-5` — **restricted to the Cyber Verification Program (CVP) / Project Glasswing**; approved organizations only. **Not on OpenCode Zen**; **no free tier** (`noFreeId: true`). Proprietary / closed weights.
- **Release / knowledge:** Released **June 9, 2026** (alongside the generally-available Claude Fable 5; Mythos 5 is the limited-release sibling). Knowledge cutoff not publicly disclosed.
- **IDs:** `anthropic/claude-mythos-5`. **Artificial Analysis does not track it** (`claude-mythos-5` 404s — a restricted model with no public API to benchmark); siblings Claude Mythos 5.1 / Mythos Preview exist.
- **Context window:** **1M total / 128K max output** (curated meta + BenchLM "1M+"; the standout cites "1M-token retrieval").
- **Modalities:** **Text + image in → text out** (curated meta). Reasoning model with tool calling. No video/audio input; text-only output. Image is document/chart-focused (CharXiv 93.5%).
- **Pricing (as of 2026-11-04):** **$10.00 / $50.00** per 1M in/out (**$1.00 cached read**, ~90% cache discount); CVP-vetted access only. Premium flagship pricing — among the most expensive per-token in the roster.
- **Architecture:** Proprietary; parameters undisclosed. Claude Fable 5-class weights (Mythos = the refusal-lifted cyber variant). Reasoning + tool use.

### Raw benchmarks found

> Independent aggregator: **BenchLM** (`claude-mythos-5`, 20 of 739 rows, Nov-4-2026 snapshot) — but **every row is sourced from Anthropic's own "Claude Fable 5 and Claude Mythos 5" system card** (vendor/published), not a third-party harness. **Artificial Analysis does not track this restricted model** (no public API), so there is no independent AA Intelligence Index. All figures below are Anthropic-published.

Agent / tool use (Anthropic system card):

- **Terminal-Bench 2.1: 88.0%** — frontier-top agentic terminal.
- **OSWorld-Verified: 85%** — strong computer-use / GUI agentic.
- **BrowseComp: 88%** — strong agentic web browsing/research.
- **CyberGym: 83.8%** — the cybersecurity-agentic benchmark befitting its CVP role.

Reasoning / knowledge (Anthropic system card):

- **GPQA Diamond: 94.1%** — frontier-top graduate science reasoning.
- **HLE: 64.5%** (59% w/o tools) — strong Humanity's Last Exam.
- **USAMO 2026: 97.6%** — near-perfect olympiad math.
- **AA Intelligence Index:** not tracked (AA 404 — restricted model, no public API).

Coding (Anthropic system card):

- **SWE-bench Verified: 95.5%** — among the highest ever published.
- **SWE-bench Pro: 80.3%** — strong on the harder Pro split.
- **SWE Multilingual: 92.2%** — strong cross-language SWE.
- **Terminal-Bench 2.1: 88.0%** (also counts as agentic-coding).

Multimodal (Anthropic system card):

- **CharXiv: 93.5%** (88.9% w/o tools) — excellent scientific-chart / document reasoning (image input).
- **SWE-bench Multimodal: 54.9%** — mid; multimodal repo-scale coding is harder.

Long context:

- **1M / 128K out**; the standout cites strong "1M-token retrieval." No separate MRCR/RULER row published.

> Provenance: **all 20 benchmark rows are Anthropic system-card (vendor) figures** relayed by BenchLM; there is **no independent third-party harness or AA Index** for this restricted model (AA 404 — no public API to measure). The figures are internally consistent and frontier-top (SWE-V 95.5%, GPQA 94.1%, USAMO 97.6%, TB 2.1 88%), matching the Fable 5-class weights. Coding/agentic are graded on these strong published numbers; the absence of independent corroboration is flagged, but the vendor system card is the authoritative primary source for a restricted model.
> Meta verification: **accurate** — June-2026 cyber-defense flagship ✓, Project Glasswing / CVP restricted access ✓ (BenchLM "variant: restricted"), Claude Fable 5 weights without security refusals ✓ (curated meta), **1M / 128K out** ✓, **$10/$50** + $1.00 cache read ✓, text+image in → text out ✓, SWE-bench Verified 95.5% ✓, GPQA 94.1% ✓, `noFreeId` ✓. No discrepancies.

### Normalized scores (1–100)

- **Tool use: 93/100.** Frontier-top agentic cluster — **Terminal-Bench 2.1 88.0%**, **OSWorld-Verified 85%**, **BrowseComp 88%**, plus **CyberGym 83.8%** for its cyber-defense role. Built for multi-step, tool-heavy defender workflows. Capped just below the very top (~95) only because all figures are vendor system-card with no independent harness corroboration.
- **Reasoning: 93/100.** **GPQA Diamond 94.1%**, **USAMO 2026 97.6%**, **HLE 64.5%** — frontier-flagship reasoning/knowledge, on par with the Fable 5-class weights. Reasoning model. No AA Index (untracked), so graded on the strong vendor composite; capped by the same vendor-only provenance.
- **Context window: 94/100.** **1M total / 128K output** — the top 1M tier, with the standout citing strong 1M-token retrieval. Held just below the absolute ceiling (95+) because effectiveness at the full 1M is asserted (vendor) rather than independently MRCR/RULER-verified.
- **Multimodal: 78/100.** **Text + image in → text out** — the verified image-input tier (no video/audio). Image is document/chart-focused and strong there (**CharXiv 93.5%**), but general multimodal repo work is mid (**SWE-bench Multimodal 54.9%**). Scored at my standard text+image tier; the cohort's lower 71.8 reflects raters penalizing the doc-focused / mid-general image capability more heavily.
- **Coding: 96/100.** **SWE-bench Verified 95.5%** (among the highest published), **SWE-bench Pro 80.3%**, **SWE Multilingual 92.2%**, **Terminal-Bench 2.1 88.0%** — genuine frontier-top coding, the model's headline strength. Capped at 96 (not higher) only by vendor-only provenance.
- **Cost efficiency: 38/100.** **$10/$50** per 1M (with a $1.00 cached read, ~90% discount) and **CVP-restricted access** — premium flagship economics; among the most expensive per-token in the roster, and not callable by the general public. Not counted toward Overall.
- **Overall Score: 91/100.** Mean of Tool 93 + Reasoning 93 + Context 94 + Multimodal 78 + Coding 96 = 454 / 5 = 90.8 → 91. Best fit: **Anthropic's refusal-lifted cyber-defense flagship** — frontier-top coding/agentic/reasoning at 1M context for vetted security work, but restricted-access and premium-priced. **Divergence note:** curated queue/average 89.6 vs my 91 → **+1.4** (tightly aligned). The gap is almost entirely **Multimodal** — I score the text+image tier at my standard 78 (strong CharXiv 93.5 chart reasoning) while the 4-rater cohort averaged 71.8 (penalizing the doc-focused / mid-general image capability); Tool/Reasoning/Context/Coding all land within ~1 of the cohort. All figures are Anthropic system-card (vendor); no independent AA/harness exists for this restricted model.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-04
- Method: public internet research (BenchLM `claude-mythos-5` 20-row page relaying the Anthropic "Claude Fable 5 and Claude Mythos 5" system card for SWE-bench Verified 95.5% / SWE-Pro 80.3% / Terminal-Bench 2.1 88% / OSWorld 85% / BrowseComp 88% / CyberGym 83.8% / GPQA 94.1% / HLE 64.5% / USAMO 2026 97.6% / CharXiv 93.5% / SWE-Multimodal 54.9%; curated `meta.json` for 1M/128K, $10/$50, text+image, CVP / Project Glasswing restricted access; WebSearch for the June-9-2026 release and pricing verification). Artificial Analysis does not track this restricted model (404 — no public API). Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Mythos 5 (news)](https://www.anthropic.com/news/claude-mythos-5)
  - [Anthropic — Claude Fable 5 & Claude Mythos 5 system card (PDF)](https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf)
  - [BenchLM — Claude Mythos 5 benchmarks](https://benchlm.ai/models/claude-mythos-5)
  - [aipricing.guru — Claude Mythos 5 pricing](https://www.aipricing.guru/models/claude-mythos-5/)
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
