# Gemini 3.1 Pro — findings by GPT 6 Astra

- Source: Google DeepMind / Gemini 3.1 Pro
- Date: 2026-10-09 (UTC); user-authorized refresh of the October 3 report.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Gemini 3.1 Pro Preview
- **Short description:** Multimodal reasoning model for scientific and agentic work; evaluated at high thinking.
- **Provider / access:** Google Gemini API, native generation interface.
- **Release / knowledge:** February 19, 2026; cutoff not verified.
- **IDs:** `gemini-3.1-pro-preview`; customtools endpoint is an alternative configuration. Zen Free ID unverified.
- **Context window:** 1,048,576 input and 65,536 output tokens.
- **Modalities:** Text/image/video/audio/PDF input, text output; tools, structured output and thinking supported.
- **Pricing (as of 2026-10-03):** Input/output/cache per million $2/$12/$0.20 for prompts up to 200K, $4/$18/$0.40 above; storage and grounding billed separately. No API free tier.
- **Architecture:** Proprietary, parameter count unverified.

Specifications: [Google API](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-pro-preview); prices: [Google pricing](https://ai.google.dev/gemini-api/docs/pricing?hl=en).

### Original launch evidence

The publisher model card was reopened on October 9. The original figures below remain the launch configuration evidence; missing-data statements reflect the October 3 search and are superseded by newly located evidence below.

Agent / tool use:

- Terminal-Bench 2.0: 68.5%, Terminus-2; GDPval-AA: 1317 Elo; tau2 retail/telecom: 90.8%/99.3%; MCP Atlas: 69.2%.
- Terminal-Bench 2.1 / Claw-Eval / ClawProBench / Toolathon: no verified public score found in the launch card.

Reasoning / knowledge:

- GPQA: 94.3%; HLE: 44.4% without tools, 51.4% with search/code; ARC-AGI-2: 77.1%.
- LCR / CritPt / Intelligence Index / Omniscience: no verified public score found in the launch card.

Coding:

- SWE-bench Verified: 80.6%; SWE-bench Pro: 54.2%, single attempt; LiveCodeBench Pro: 2887 Elo; SciCode: 59%.
- Vibe Code Bench / DeepSWE: no verified public score found in the launch card.

Long context:

- MRCR v2 eight-needle: 84.9% at 128K average, 26.3% at 1M pointwise.

Benchmark source: [DeepMind model card](https://deepmind.google/models/model-cards/gemini-3-1-pro), February 2026 vendor evaluation; harnesses and context lengths differ.

### Fresh evidence checked October 9

- Vibe Code Bench v1.1: **32.03%**, OpenHands, **$3.83/test**, displayed duration **20m12s**. The row explicitly identifies Gemini 3.1 Pro Preview (02/26). This is application-building performance, not SWE-bench or Vibe1-100. The page is dated October 7; retrieval date is not the evaluation date. [Vals leaderboard](https://www.vals.ai/benchmarks/vibe-code)
- MCP Atlas: **78.20 ± 2.50**, high effort, on Scale's displayed leaderboard. Its split table gives 78.2% across all 1,000 tasks and 80.6% on the public 500. Keep these separate from the original Google-card 69.2%: the source/configuration difference is not a demonstrated model improvement. [Scale MCP Atlas](https://labs.scale.com/leaderboard/mcp_atlas)

Google's published deprecation table lists February 19, 2026 as release date and no announced shutdown date for this exact ID. This is documentation status, not an authenticated endpoint test. [Google lifecycle table](https://ai.google.dev/gemini-api/docs/deprecations?hl=en)

### Comparison with October 3 and remaining gaps

The new tool evaluation broadens evidence, while the modest app-building result qualifies the original strong repository/scientific coding assessment. Tool use changes from 84 to 86; Coding changes from 89 to 86. Reasoning 94, Context 95, Multimodal 95 and Cost 68 remain unchanged. Overall remains 91 (raw mean changes from 91.4 to 91.2). These judgments compare different task families; raw benchmark percentages are not averaged together. Newly found evidence is not proof of improvement since October 3.

The low full-window MRCR result remains a material limitation; capacity does not establish retrieval reliability. The previous pricing is explicitly an October 3 snapshot: the current pricing page was retrieved but exact-model numeric rows were not recovered in this pass, so no current-price change is asserted. Vals task costs are evaluation metadata, not a current API quote. Knowledge cutoff, DeepSWE and exact-ID hallucination rates remain unverified in this refresh. No neighboring Gemini version or customtools configuration is substituted.

### Normalized scores (1–100)

- **Tool use: 86/100.** Independent MCP Atlas broadens the launch tool evidence; configuration differences remain explicit.
- **Reasoning: 94/100.** Strong GPQA, HLE and abstract reasoning; long-context retrieval weakness limits confidence.
- **Context window: 95/100.** Capacity reaches 1M; poor eight-needle retrieval prevents any bonus above the base tier.
- **Multimodal: 95/100.** Broad input coverage including audio; output is text only.
- **Coding: 86/100.** Strong repository/scientific coding coexists with modest OpenHands application-building performance.
- **Cost efficiency: 68/100.** Moderate paid pricing with higher long-prompt costs; no free API assumption.
- **Overall Score: 91/100.** Half-up mean (86 + 94 + 95 + 95 + 86) / 5 = 91.2; broad reasoning and multimodal work, with caution on dense retrieval near 1M.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public-source research; scores are normalized interpretations, not vendor scores.
- Future sources: add a separate signed report with these headings.
