# Claude Opus 4.5 — findings by MiniMax M3

- Source: Anthropic / `claude-opus-4-5-20251101` (Anthropic API, Bedrock, Google Cloud, Microsoft Foundry, Claude Code, Claude app)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Naming note.** "Claude Opus 4.5" in our roster is the **November 24, 2025 Opus release** under the API ID `claude-opus-4-5-20251101`. It is the first Anthropic model to (a) break **80% on SWE-bench Verified (80.9%)**, (b) ship a public **effort parameter** (low/medium/high → later expanded to xhigh/max in Opus 4.7+), and (c) drop Opus pricing from $15/$75 to **$5/$25 per 1M (a 67% cut)**. Superseded by Opus 4.6 (200K), Opus 4.7 (1M, Project Glasswing), Opus 4.8, Opus 5, and Opus 5.5 — it is the *current* "predecessor" Opus that teams still pin in production where the 1M context is overkill. The 200K context ceiling is the right anchor for any subagent that doesn't need 1M.

## Model card

- **Name:** Claude Opus 4.5
- **Short description:** Anthropic's first >80% SWE-bench Verified model (80.9% — first to break the line) with a 67% price cut to $5/$25, the effort parameter (low/medium/high) for token-vs-quality tradeoffs, and a state-of-the-art prompt-injection attack success rate of 4.7% (vs 21.9% for GPT-5.1). Superseded by Opus 4.6/4.7/4.8/5/5.5 but still the right Opus for subagent work where 1M context is overkill and Opus 5.5's verbosity tax is unwanted.
- **Provider / access:** Anthropic API `claude-opus-4-5-20251101`; AWS Bedrock `anthropic.claude-opus-4-5-20251101`; Google Cloud Vertex AI; Microsoft Foundry; Claude Code; Claude app; Claude for Chrome; Claude for Excel (beta). OpenCode Zen / OpenRouter route (per `meta.json`): `anthropic/claude-opus-4.5`.
- **Release / knowledge:** Released **2025-11-24** by Anthropic (system card on `anthropic.com/news/claude-opus-4-5`). Knowledge cutoff **March 2025** (per Wiegold review; Anthropic launch post does not publish a precise cutoff for this SKU).
- **IDs:** `claude-opus-4-5-20251101` (Anthropic canonical; the date suffix is part of the ID). Bedrock: `anthropic.claude-opus-4-5-20251101`. OpenCode Zen / OpenRouter: `anthropic/claude-opus-4.5`. There is no `claude-opus-4-5` alias without the date suffix.
- **Context window:** **200,000 tokens** input / **64,000 tokens** max output (per Anthropic launch and Wiegold review). 200K is the standard Opus 4.5/4.6 context; 1M arrived with Opus 4.7.
- **Modalities:** Text, image in; text out. Native vision (chart, screenshot, document image). Tool calls / function calling / structured outputs. Computer use with the new **Zoom tool** for fine UI details. Tool Search (beta) provides 85% context reduction when working with 100+ tools. Browser use supported.
- **Pricing (as of 2026-10-17):** `meta.json` "$5 input / $25 output per 1M" (Anthropic list). Cache reads $0.50/M (90% off input). Batch API 50% off. This is the post-cut Opus price; Opus 4.1 was $15/$75 — the 67% reduction is the headline of the launch.
- **Architecture:** Proprietary (Anthropic). **Hybrid reasoning** — a single model trained for both quick responses and extended chain-of-thought, controlled via the new **effort parameter** (low/medium/high at launch; xhigh/max added in later Opus SKUs). Thinking block preservation across turns. Automatic context compaction when approaching 200K (later extended to longer conversations in the Claude app).

### Raw benchmarks found

> All numbers from the Anthropic launch post (`anthropic.com/news/claude-opus-4-5`) and the Wiegold independent review, unless noted. Methodology: 64K thinking budget, interleaved scratchpads, 200K context, default effort (high), default sampling, averaged over 5 trials; SWE-bench Verified with no thinking budget; Terminal Bench 128K thinking budget. Anthropic also improved the hosting environment, which raised Gemini 3 to 56.7% and GPT-5.1 to 48.6% on the same harness — so the comparison table is on a controlled substrate.

Agent / tool use:

- **SWE-bench Verified: 80.9%** (Anthropic launch; first model to break 80%). vs Sonnet 4.5 77.2%, vs GPT-5.1 76.3% (rerun on Anthropic's harness, 48.6% on the original OpenAI substrate), vs Gemini 3 Pro 76.2% (rerun on Anthropic's harness, 56.7% on the original Google substrate).
- **Terminal-Bench: 59.3%** (Wiegold benchmark table, Anthropic substrate). vs Sonnet 4.5 44.3%, vs GPT-5.1 47.6%, vs Gemini 3 Pro 54.2%. The +15% over Sonnet 4.5 is what Warp specifically called out.
- **ARC-AGI-2: 37.6%** (Wiegold). vs Sonnet 4.5 13.6%, vs GPT-5.1 17.6%, vs Gemini 3 Pro 31.1%. **More than doubles GPT-5.1's ARC-AGI-2 score** on the same substrate.
- **SWE-bench Multilingual: leads 7 of 8 programming languages** (Anthropic launch). First Anthropic claim of cross-language dominance.
- **Aider Polyglot: 10.6% jump over Sonnet 4.5** (Anthropic launch).
- **BrowseComp-Plus: significant jump over Sonnet 4.5** (Anthropic launch; fetch-enabled version).
- **Vending-Bench: 29% more than Sonnet 4.5** (Anthropic launch). Long-horizon agent stability.
- **Tau2-Bench: state-of-the-art** (Anthropic launch; the airline policy "upgrade the cabin first, then modify the flights" example is the published creative-problem-solving illustration).
- **Office workflows: +20% accuracy, +15% efficiency** (Microsoft Excel automation per Anthropic customer feedback).
- **Vibe Code / 3D visualizations: 30 minutes vs 2 hours for previous models** (per Figma customer feedback).

Coding:

- **SWE-bench Verified: 80.9%** (above).
- **LiveCodeBench / Codeforces-style coding**: included in the Anthropic benchmark table; no specific number quoted in the launch text but the table shows Opus 4.5 leading on most rows.
- **Token efficiency**: at medium effort, **matches Sonnet 4.5's best SWE-bench Verified score using 76% fewer output tokens**; at high effort, **exceeds Sonnet 4.5 by 4.3 percentage points using 48% fewer tokens**.

Reasoning / knowledge:

- **GPQA Diamond: 87.0%** (Wiegold). Below Gemini 3 Pro 91.9% but ahead of GPT-5.1 and Sonnet 4.5 on the same substrate.
- **Vision, reasoning, mathematics skills higher than predecessors across the board** (Anthropic launch).
- **Anthropic's internal take-home exam: scored higher than any human candidate ever, within 2-hour limit** (Anthropic launch). The result was using parallel test-time compute in Claude Code; without a time limit, the model (used within Claude Code) matched the best-ever human candidate.

Long context:

- 200K context / 64K max output. **Automatic context compaction** when approaching 200K — the new affordance that lets long sessions roll over. No published MRCR/RULER for Opus 4.5 specifically; the model sits in the 200K-class, before 1M arrived with Opus 4.7.

Safety:

- **4.7% prompt-injection attack success rate** (Gray Swan strong-attack benchmark). vs GPT-5.1 21.9% — Anthropic claims hardest-to-trick-with-prompt-injection in the industry at launch. (Subsequent Opus releases extended this further.)
- **"Most robustly aligned model we have released to date"** (Anthropic launch).
- Concerning-behavior scores (Petri evals) trend down across the lineage.

### Normalized scores (1–100)

> Per `RULES.md` (v4): **Overall = half-up mean of the five quality dims** `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency scored independently and excluded. All numbers are normalized 1–100 interpretations of the Anthropic launch + Wiegold review evidence above. The headline SWE-bench Verified 80.9% is the launch number; the 48.6% GPT-5.1 and 56.7% Gemini 3 Pro numbers are reruns on Anthropic's improved hosting environment (per the methodology footnote).

- **Tool use: 87/100.** SWE-bench Verified 80.9% (first >80%) / Terminal-Bench 59.3% (+15 over Sonnet 4.5) / ARC-AGI-2 37.6% (>2× GPT-5.1) / SWE-bench Multilingual leading 7 of 8 languages. Token-efficiency wins: matches Sonnet 4.5 best SWE-bench at 76 % fewer output tokens (medium); beats it by 4.3 pp at 48 % fewer tokens (high). The customer-feedback block from Warp, GitHub Copilot, Cursor, Replit, Notion, and Figma all converge on the same story: long-horizon agent stability is the new Opus 4.5 advantage.
- **Reasoning: 87/100.** GPQA Diamond 87.0% (Wiegold) / Aider Polyglot +10.6 over Sonnet 4.5 / internal take-home exam above every human candidate. Slightly below Gemini 3 Pro on PhD-level domain knowledge (91.9% vs 87.0%) but ahead of Sonnet 4.5 and GPT-5.1 on the same substrate. Tau2-Bench is state-of-the-art; the airline-policy example is the canonical creative-problem-solving illustration.
- **Context window: 78/100.** 200K is the standard Opus 4.5 ceiling; superseded by 1M with Opus 4.7. Automatic context compaction is a real affordance, not a paper claim. No published MRCR/RULER for this SKU; context fidelity at 200K is in the Sonnet 4.5 cluster but the new compaction feature is what sets the long-session workflow.
- **Multimodal: 71/100.** Native vision (image in; text out), with the new Zoom tool for fine UI details in computer-use screenshots. Vision capability is higher than predecessors per Anthropic, but Opus 4.5 is not a multimodal SKU — vision is supported, not headlined. The 3.7/3.8 generations are text-only at the Max tier; Opus 4.5 still does text + image.
- **Coding: 89/100.** SWE-bench Verified 80.9% is the headline (first >80%) and the +4.3 pp over Sonnet 4.5 at 48 % fewer tokens is the cost-adjusted reason it's the right Opus for subagent work. Terminal-Bench 59.3% is +15 pp over Sonnet 4.5. SWE-bench Multilingual leads 7 of 8 languages. ARC-AGI-2 37.6% (more than 2× GPT-5.1). The Microsoft customer feedback on Excel automation (+20% accuracy, +15% efficiency) and the Figma 3D-visualization work (30 min vs 2 h) are the deployed-evidence corroboration.
- **Cost efficiency: 55/100.** $5/$25 list is 1/3 of Opus 4.1's $15/$75 (the 67% cut), but still the most expensive frontier model in this slice. Cache reads $0.50/M (90% off), Batch 50% off. Compared to GPT-6 Sol ($2/$10) and Qwen 3.7 Max ($1.48/$4.43 OpenRouter), Opus 4.5 is 2-3× more expensive per token but materially stronger on agentic coding.
- **Overall Score: 82/100.** Half-up mean of the 5 non-cost quality dims: (87 + 87 + 78 + 71 + 89) / 5 = 412 / 5 = 82.4 → **82**. Best fit: **the right Opus for subagent work where 1M context is overkill and Opus 5.5's verbosity tax is unwanted**. The 200K ceiling keeps it in scope for any task that doesn't need a 1M window, and the $5/$25 list (with 90% caching) makes the per-task economics competitive when the effort parameter is set sensibly. Superseded by Opus 4.6/4.7/4.8/5/5.5 on capability, but the cost-cut + effort-parameter combination is the most stable choice for teams that have already pinned 4.5 in their Claude Code harness and want to keep their subagent tier unchanged.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-17
- Method: independent MiniMax M3 evaluation. Primary sources: `anthropic.com/news/claude-opus-4-5` (Anthropic launch post: SWE-bench Verified 80.9% first-to-break-80, $5/$25 list, 67% price cut, effort parameter, automatic context compaction, customer-feedback block from 18 companies, system card reference), `thomas-wiegold.com/blog/claude-opus-4-5-review/` (independent benchmark table: SWE-bench Verified 80.9% / Terminal-Bench 59.3% / ARC-AGI-2 37.6% / GPQA Diamond 87.0%; $5/$25 pricing table; 200K context / 64K max output; knowledge cutoff March 2025; effort parameter code sample; safety 4.7% attack success rate vs 21.9% for GPT-5.1; Simon Willison reality check on refactoring). Cross-references: `valueaddvc.com/blog/anthropic-claude-4-whats-new-benchmark-results-and-how-it-compares-to-gpt-5` (Opus 4.5 = first >80% SWE-bench Verified, pricing trajectory), `developersdigest.tech/blog/claude-opus-4-5` (release confirmation, three-times-cheaper framing), `trilogyai.substack.com/p/news-brief-anthropic-releases-claude` (release coverage), `thebridgeto.ai/resources/models/810a0486-94fd-462a-9a41-8d925991982c/` (November 2025 launch, 80.9% first-to-break-80). All coding/reasoning numbers are vendor-reported from the Anthropic launch post, with the Wiegold independent benchmark table used as the cross-check. The 48.6% GPT-5.1 and 56.7% Gemini 3 Pro SWE-bench Verified numbers are reruns on Anthropic's improved hosting environment (per the methodology footnote), not the vendor's own substrate.
- Future sources: add a new file next to this one, e.g. `Opus_4.5_alt.md`, using the same headings; Opus 4.6 / Opus 4.7 / Opus 4.8 / Opus 5 / Opus 5.5 are separate folders in our queue and have already been researched by other agents.
