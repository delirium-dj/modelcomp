# Claude Mythos 5.1 — findings by Mercury 3

- Source: Anthropic/Claude Mythos 5.1
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Per Anthropic's launch page, **Claude Mythos 5.1 is identical to Claude Fable 5.1 — the same model with different safeguard levels**. Mythos is available only through trusted-access programs (Cyber Verification Program, Life Sciences Verification Program) with more permissive safeguards for vetted cybersecurity/life-science work. Treat as a safeguard/access variant of Fable 5.1, not a distinct checkpoint.
- **Provider / access:** Restricted access only (vetted US orgs via CVP/LSVP; Claude Security product also powered by Mythos 5.1). Not generally available on the public API.
- **Release / knowledge:** Released September 2026 (same launch as Fable 5.1); knowledge cutoff not published.
- **IDs:** `claude-mythos-5-1` (trusted-access route; same weights as `claude-fable-5-1`).
- **Context window:** 1,000,000 tokens (1M) total; max output not disclosed.
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; preserved thinking; zero data retention option (Fable/EU watermarking applies).
- **Pricing (as of 2026-11-03):** $10.00 input / $50.00 output per 1M tokens, cache reads $0.25 (program access; not a public SKU).
- **Architecture:** proprietary; parameter count undisclosed; not open-weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Mythos 5.1, system card) vs 55.8% for Fable 5.1 — safeguards on Fable reduce its measured TB4.0; Mythos with reduced safeguards scores higher
- GDPval-AA v2: **1853 Elo** (Fable 5.1 measured); OSWorld 2.0: 77.9% partial / 41.7% strict
- AutomationBench: 31.4%; CursorBench 3.2: 73.4%; Terminal-Bench-Science 0.1: 52.6%
- Strongest cyber capabilities of any Anthropic model to date (vendor claim, safeguards off); external Gray Swan prompt-injection benchmark most robust to date

Reasoning / knowledge (Fable 5.1 measured, same weights):

- HLE: **65.0%** with tools / 60.9% without (system card)
- GPQA Diamond: **93.7%** (AA); ARC-AGI-1 97.5%, ARC-AGI-2 90% (ARC Prize)
- AA-LCR: 85.3%; CritPt 29.7%; MLCR-AA 15.6%; AI Index 49 (#19)
- FrontierMath v2 Tiers 1–3 90.18%, Tier 4 87.81% (Epoch AI)

Coding (Fable 5.1 measured, same weights):

- SWE-bench Pro: **81.2%**; SWE Multilingual: **89.1%**; DeepSWE: **67.4%**; ProgramBench: **87.6%**; LiveCodeBench: **90.5%** (Vals); AA Coding Index: 81.6%

Long context / Multimodal:

- 1M window; AA-LCR 85.3%; text+image in, text out; ParseBench 78.12%.

### Normalized scores (1–100)

Identical model to Claude Fable 5.1 — scores mirror it, with the TB4.0 delta explained by safeguards:

- **Tool use: 92/100.** Same weights as Fable 5.1 (91) but measured TB4.0 60.9% with Mythos-level safeguards (above Fable's 55.8%) → 92.
- **Reasoning: 92/100.** HLE 65% with tools, GPQA 93.7%, ARC-AGI-2 90% — elite; capped by 70% hallucination rate and II 49.
- **Context window: 95/100.** 1M with best-in-class AA-LCR 85.3%; deep-retrieval metrics (MLCR 15.6%, GraphWalks 65%) keep it below the perfect-retrieval band.
- **Multimodal: 82/100.** image input with strong ParseBench 78.12%; no video/audio input, text-only output.
- **Coding: 94/100.** SWE-Pro 81.2%, SWE Multilingual 89.1%, LiveCodeBench 90.5%, coding index 81.6% — frontier; capped by FrontierCode 2.0 32.4% and SWE Multimodal 54.7%.
- **Cost efficiency: 25/100.** $10/$50 with restricted program access — not a public SKU; cost scored low for availability, not raw price.
- **Overall Score: 91/100.** Mean of (92+92+95+82+94)/5 = 91.0 → 91. Same model as Fable 5.1; pick it only if your work qualifies for CVP/LSVP trusted access.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (Anthropic Fable/Mythos 5.1 launch + system card, BenchLM, Artificial Analysis, ARC Prize, Epoch AI); scores are normalized 1–100 interpretations, not official vendor scores. Identity note: vendor states Mythos 5.1 = Fable 5.1 weights with different safeguards; Fable 5.1 evidence used where Mythos-only numbers are unpublished.
- Reference URLs:
  - [Claude Fable 5.1 and Claude Mythos 5.1 launch (Anthropic)](https://www.anthropic.com/claude-fable-and-mythos-5-1)
  - [Claude Fable 5.1 and Claude Mythos 5.1 System Card (Anthropic)](https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf)
  - [Claude Mythos 5.1 — BenchLM benchmark aggregation](https://benchlm.ai/models/claude-mythos-5-1)
  - [Claude Fable 5.1 — Artificial Analysis model page](https://artificialanalysis.ai/models/claude-fable-5-1)
  - [ARC Prize results — Claude Fable 5.1](https://arcprize.org/results/anthropic-claude-fable-5-1)
  - [FrontierMath v2 leaderboards (Epoch AI)](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
