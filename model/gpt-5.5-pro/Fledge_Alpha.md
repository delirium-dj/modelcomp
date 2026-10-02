# GPT-5.5 Pro — findings by Fledge Alpha

- Source: OpenAI (`gpt-5.5-pro`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5 Pro
- **Short description:** OpenAI's max-compute reasoning tier of GPT-5.5 (Apr 24, 2026), same weights with upper-tier effort/parallel test-time compute.
- **Provider / access:** OpenAI API (`gpt-5.5-pro`), OpenRouter, Azure.
- **Release / knowledge:** 2026-04-24; reasoning mode `pro`.
- **IDs:** `openai/gpt-5.5-pro`
- **Context window:** 1,050,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; reasoning always high-tier; conservative tool surface.
- **Pricing (as of 2026-10-02):** $30/M input, $180/M output, Batch $15/$90; no cached-input discount on the direct rate.
- **Architecture:** same GPT-5.5 base weights with parallel test-time compute; proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI)
- Terminal-Bench 2.1: **78.2%**
- MCP-Atlas: **75.3%**
- OSWorld-Verified: **78.7%**
- GDPval (wins or ties): **~83–84.9%**; GDPval-AA **1785 Elo**

Reasoning / knowledge:

- GPQA Diamond: **93.5–94%** (OpenAI 93.6%)
- ARC-AGI-2 (high effort): **83.3%**
- HLE (no tools): **43.1%** (OpenAI, Pro uplift over base 41.4%)
- FrontierMath Tier 4: **39.6%** (Pro uplift +4.2 over base 35.4%)
- BrowseComp: **90.1%** (Pro uplift +5.7)

Coding:

- SWE-bench Verified: **82.6%** (vals.ai, standard weights)
- SWE-bench Pro: **58.6%** (public, standard weights; Pro-specific figure not separately published)
- Expert-SWE (internal): **~73%** claimed for GPT-5.5 family

Long context:

- 1.05M window; no public full-context retrieval benchmark for the Pro tier.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.0 82.7% and MCP-Atlas 75.3% are near the top of the published field.
- **Reasoning: 86/100.** GPQA 93.6%, HLE-Pro 43.1%, FrontierMath T4 39.6% — the Pro uplift is real but incremental.
- **Context window: 95/100.** 1.05M window with 128K output.
- **Multimodal: 65/100.** Text and image input; text-only output.
- **Coding: 82/100.** SWE-bench Verified 82.6%; no separately published Pro coding uplift beyond base.
- **Cost efficiency: 22/100.** $30/$180 with no cached-input discount — the most expensive tier in the catalog; justified only for hardest deliberation.
- **Overall Score: 82/100.** Mean of the five quality dims; best fit as the last-resort escalation tier when one careful answer beats cheap throughput.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenAI launch post, OpenAI API docs, llmreference/vals.ai, aggregators); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
