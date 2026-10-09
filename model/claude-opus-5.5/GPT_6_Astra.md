# Claude Opus 5.5 — findings by GPT 6 Astra

- Source: Anthropic / Claude Opus 5.5
- Date: 2026-10-09 (UTC); user-authorized refresh of the October 3 report.
- Overview and scoring methodology: [methodology](../../model-comparison.md)
- Cross-model signed log: [log](../../model-findings.md)

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Proprietary reasoning model for extended coding and knowledge work.
- **Provider / access:** Claude Messages API; also Bedrock, Google Cloud and Microsoft Foundry.
- **Release / knowledge:** September 22, 2026 / June 2026.
- **IDs:** `claude-opus-5-5`; no verified Zen Free ID.
- **Context window:** 1M tokens; 128K output, with 300K output in Batch beta.
- **Modalities:** Text, image and PDF input, text output; adaptive reasoning and tool use. Native audio/video not documented in the model specification.
- **Pricing (as of 2026-10-03):** Input/output/cache-read $4/$20/$0.20 per million tokens; fast mode $8/$40 input/output.
- **Architecture:** Proprietary; size undisclosed. Card facts: [Claude documentation](https://platform.claude.com/docs/en/models/opus-5-5/overview).

### Original launch evidence (rechecked October 9)

Launch-table values below remain published unchanged. Missing-data statements describe the October 3 search and are superseded by the fresh evidence section where applicable.

Agent / tool use:

- GDPval-AA v2.1: 1846 Elo; AutomationBench: 40.0%; OSWorld 2.1: 81.8% partial credit.
- Terminal-Bench 4.0: 66.4% at xhigh, standard error ±2.6 points. Do not compare directly to version 2.1.
- Tau3 / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found.

Reasoning / knowledge:

- HLE: 67.7% with tools; Terminal-Bench-Science 0.1: 58.7%.
- GPQA / LCR / MLCR / CritPt / Intelligence Index / Omniscience: no verified public score found in reviewed sources.

Coding:

- FrontierCode v1.1 Main: 54.4%; CursorBench 4.0: 57.8%.
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found.

Numbers above: [Anthropic launch evaluation](https://www.anthropic.com/claude-opus-5-5), predominantly max effort. Production safeguards can route selected tasks to earlier Claude models, so these are deployed-system results, not uniformly isolated model measurements. AutomationBench has no fallback.

Long context:

- No verified long-context retrieval score found; capacity alone does not demonstrate retrieval accuracy.

### Fresh evidence and specification checks

- Artificial Analysis, max effort with default fallback: Intelligence Index **58**, HLE **61.4%**, SciCode **66.9%**, Terminal-Bench 4.0 **59.6%**, AA-Briefcase v1.1 **1822 Elo**. These September 22 published results fill prior gaps; AA's HLE/terminal numbers are separate from the vendor's tool-assisted/harness-specific results. [AA evaluation](https://artificialanalysis.ai/articles/claude-opus-5-5)
- Vibe Code Bench v1.1: **90.29%**, OpenHands, **$57.92/test**, displayed duration **1h36m**. [Vals leaderboard, updated October 7](https://www.vals.ai/benchmarks/vibe-code)
- Chartography: **89.0% with tools**, a visual-chart result newly captured from the launch table. Do not compare directly with no-tool chart scores. [Anthropic evaluation](https://www.anthropic.com/claude-opus-5-5)

Both the model's 1M context and 128K output limit remain documented, with 300K output limited to Batch beta. Standard input/output prices are unchanged. PDF input is supported for all active Claude models, correcting the earlier image-only tier. [PDF support](https://platform.claude.com/docs/en/build-with-claude/pdf-support)

Opus 5.5 uses always-on adaptive thinking, default medium effort, and rejects forced tool use. Its standard cache-read price remains $0.20 per million tokens. The old fast-mode $8/$40 numbers remain historical here; this refresh confirmed the existence of the separately priced preview, not its numeric tariff. [Current model documentation](https://platform.claude.com/docs/en/models/opus-5-5/overview)

### Comparison with October 3 and remaining gaps

Newly located independent and visual/application benchmarks fill gaps; they do not demonstrate that the model improved after October 3. Vals measures app building with OpenHands, not Vibe1-100 or SWE-bench. AA results retain their effort and fallback qualifications and must not replace differently configured vendor results.

Multimodal changes from 70 to 80 under the project's PDF-input tier. All other dimension ratings remain unchanged: the added evidence supports the existing high capability scores, while task costs show why token prices alone do not establish cheap execution. Overall changes from 90 to 92. Tool 95, Reasoning 94, Context 95, Coding 96 and Cost 57 are retained.

Exact-ID GPQA, full-window retrieval, MCP Atlas, SWE-bench, LiveCodeBench and DeepSWE remain unverified in reviewed evidence. No results from Opus 5, Sonnet 5 or other neighboring versions are substituted.

### Normalized scores (1–100)

- **Tool use: 95/100.** Strong professional and computer-use evaluations; fallback routing limits attribution.
- **Reasoning: 94/100.** Strong tool-assisted HLE; missing unaided measures caps confidence.
- **Context window: 95/100.** Documented 1M context earns the base top tier; retrieval performance unverified.
- **Multimodal: 80/100.** Verified image and PDF input meet the PDF-input tier; native audio/video and non-text output remain unverified.
- **Coding: 96/100.** Leads the launch comparison in terminal and repository work; vendor harness and safeguards qualify the result.
- **Cost efficiency: 57/100.** Paid $4/$20 tier is relatively expensive, offset somewhat by discounted cache reads.
- **Overall Score: 92/100.** Half-up mean (95 + 94 + 95 + 80 + 96) / 5 = 92; cost excluded.

---

## Signature

- Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-09; original research October 3.
- Method: Independent public-source research; normalized scores are interpretations, not official benchmark scores.
- Future sources: add a separate signed report with these headings.
