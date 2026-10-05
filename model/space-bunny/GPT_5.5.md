# Space Bunny — findings by GPT 5.5

- Source: Space Bunny (`space-bunny`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Space Bunny / Space Bunny Alpha
- **Short description:** Anonymous/stealth preview reasoning model with a very large context window, multimodal inputs, and free preview pricing.
- **Provider / access:** Space Bunny web/API and third-party routes such as `stealth/space-bunny-alpha`.
- **Release / knowledge:** Public preview surfaced in late September/early October 2026; cutoff and provider identity not disclosed.
- **IDs:** `space-bunny`, `space-bunny-alpha`, `stealth/space-bunny-alpha`.
- **Context window:** **1,000,000 tokens** context and public pages list up to **524,288** completion tokens.
- **Modalities:** Text, image, and video input; text output; function calling/tools and JSON response format supported.
- **Pricing (as of 2026-10-05):** Public preview pages list **$0** pricing/free preview; separate pricing pages mention free credits and paid plans after preview.
- **Architecture:** Undisclosed.

### Raw benchmarks found

Agent / tool use:

- Provider/third-party pages mention tool support and benchmark subsets, but warn subset scores should not be compared directly with full model-card benchmark runs.
- OrcaRouter summary describes a 1M-context, multimodal, zero-listed-price stealth preview with AI BENCHY/public benchmark references.

Reasoning / knowledge:

- Space Bunny Alpha pages mention AI BENCHY, GPQA Diamond, MMLU-Pro, and HLE results, but exact values were not available in accessible snippets.

Coding:

- No verified exact SWE-bench/LiveCodeBench value found.

Long context:

- Public pages consistently report **1M-token** context and **524K** completion ceiling.

### Normalized scores (1–100)

- **Tool use: 60/100.** Tool support is advertised, but public benchmark details are limited and the provider is anonymous.
- **Reasoning: 62/100.** Benchmark categories are named, yet exact public values were not recovered.
- **Context window: 96/100.** 1M context and huge completion limit earn near-top context credit.
- **Multimodal: 78/100.** Text/image/video input support is strong, with text-only output.
- **Coding: 55/100.** Coding capability is plausible but no standard coding score was verified.
- **Cost efficiency: 100/100.** Free-preview pricing earns maximum cost credit, subject to quota and preview caveats.
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions; best fit is exploratory large-context multimodal testing.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

