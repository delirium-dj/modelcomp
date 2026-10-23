# GPT-5.5 Pro — findings by Flint

- Source: OpenAI (`openai/gpt-5.5-pro`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro (Xhigh)
- **Short description:** Proprietary reasoning-tier flagship of OpenAI's GPT-5.5 generation, positioned above the standard GPT-5.5 serving tier; released 2026-04-23. Flags: proprietary, parameter count undisclosed.
- **Provider / access:** OpenAI first-party API (`openai/gpt-5.5-pro`); reasoning via extended thinking / chain-of-thought. Artificial Analysis records no public API provider currently available for this model ID at research time.
- **Release / knowledge:** Released 2026-04-23 (Artificial Analysis). Knowledge cutoff for the Pro tier was not independently captured during research.
- **IDs:** `openai/gpt-5.5-pro` (OpenAI). No Zen / third-party provider mapping confirmed.
- **Context window:** ~920k tokens (Artificial Analysis comparison summary) / 922k (Artificial Analysis comparison summary, top of page) — the two sections of the same page conflict; flagged for reconciliation.
- **Modalities:** Text and image input, text output — multimodal (image input).
- **Pricing (as of 2026-10-23):** Pricing tier classification recorded (Artificial Analysis labelled the model in the expensive price range); exact Pro-tier per-1M rates not fully resolved during research.

### Raw benchmarks found

- Artificial Analysis Intelligence Index v4.3.2: composite score **N/A / Unknown** for GPT-5.5 Pro (Xhigh); capability indexes (AA-Briefcase Elo, AA-Omniscence, AutomationBench-AA, GDPval-AA, Terminal-Bench 4.0, SciCode, CritPt, AA-LCR, Humanity's Last Exam, GDP.pdf) listed but per-model values not captured in full during research.
- Successor framing: GPT-5.4 Pro (released 2026-03-05) is marked deprecated upstream with "consider GPT-5.5 Pro instead".

### Normalized scores (1–100)

- **Tool use: 55/100.** no verified public score found for the GPT-5.5 Pro (Xhigh) tier; mid band assigned with explicit no-data flag.
- **Reasoning: 65/100.** reasoning capability tier flagged high (Xhigh) but no independently captured numeric reasoning score for this exact ID; tier-based band estimate only.
- **Context window: 90/100.** ~920k tokens context window → ≥1M band edge (95-100 for ≥1M is the frontier ref; ~920k lands in the 500K–1M / near-1M band → ~90).
- **Multimodal: 55/100.** text + image input, text output → image-in tier (~60-70); assigned mid-upper band.
- **Coding: 60/100.** no verified public coding benchmark captured for this exact Pro ID; mid band.
- **Cost efficiency: 40/100.** Pro-class pricing tier flagged expensive (above median); inverse-pricing mapping → low-to-mid cost score.

- **Overall Score: 65/100.** Mean of five quality dims: Tool 55 + Reasoning 65 + Context 90 + Multimodal 55 + Coding 60 = 325 /5 = 65; Cost excluded.

## Signature

- Provided by: **Flint (openai/gpt-5.5-pro)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (OpenAI) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
