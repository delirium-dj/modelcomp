# Claude Opus 4.7 — findings by Big Pickle

- Source: Anthropic (`claude-opus-4.7`)
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.7
- **Short description:** Anthropic's April 2026 Opus flagship, aimed at autonomous coding and long-horizon agentic work (its own framing: hardest software-engineering tasks, async workflows, self-verification). Superseded by Claude Opus 4.8 (2026-05-28) but still generally available at the same price; not an alias of any other entry.
- **Provider / access:** OpenCode Zen `opencode/claude-opus-4.7`; Anthropic Messages API (`claude-opus-4-7`), Amazon Bedrock (`anthropic.claude-opus-4-7`, `us./eu./jp./au.global.anthropic.claude-opus-4-7`), Google Cloud Vertex AI, Microsoft Foundry. Anthropic routes are the Messages API; the Zen route is Chat Completions.
- **Release / knowledge:** released 2026-04-16 (Anthropic announcement; Bedrock model launch date Apr 16, 2026, EOL no sooner than 2027-04-16); knowledge cutoff January 2026 (Amazon Bedrock model card).
- **IDs:** `anthropic/claude-opus-4-7`, Bedrock `anthropic.claude-opus-4-7`, OpenCode Zen `opencode/claude-opus-4.7` (no Free ID on Zen — `meta.json` `noFreeId: true`).
- **Context window:** 1,000,000 tokens total / 128,000 max output (Amazon Bedrock model card; Vals AI model page independently lists 1M context and 128k max output). Note: one low-authority comparison site (`claudeopus47.vercel.app`) claims 200K/64K — contradicted by Bedrock, Vals and BenchLM, treated as wrong.
- **Modalities:** text, image, PDF in; text out; adaptive extended thinking only (`thinking.type: "adaptive"` — Bedrock rejects the older `enabled`+`budget_tokens` form); tool calls; JSON/tool streaming; computer use (`computer_20251124`); context compaction (`compact-2026-09-04`). No audio or video input.
- **Pricing (as of 2026-10-18):** $5.00 in / $25.00 out per 1M (unchanged from Opus 4.6); cached input $0.50; batch $2.50/$12.50 (repo `meta.json`; Anthropic launch coverage confirms $5/$25). Paid only — no $0 tier; Anthropic notes Opus 4.7 can spend up to ~35% more tokens than 4.6 at higher effort levels.
- **Architecture:** proprietary (Anthropic, weights private).

### Raw benchmarks found

> All vendor-reported figures below come from Anthropic's 2026-04-16 launch chart as reproduced by llm-stats.com and ComputingForGeeks; independent numbers (Vals AI, Artificial Analysis via BenchLM) are marked as such.

Agent / tool use:

- Terminal-Bench 2.0: **69.4%** (Anthropic launch chart, vs Opus 4.6 65.4%); Terminal-Bench 2.1 (Vals harness): **68.54% ±1.30**, rank 31/75 (Vals AI)
- τ²-bench: **88.6%** (Artificial Analysis run, cited by BenchLM for the adaptive variant); AA also carries **74%** for the base variant — harness/effort-level discrepancy, both listed
- GDPval-AA: **42.8%** (Artificial Analysis figure via BenchLM); Anthropic claims "state-of-the-art on GDPval-AA" without publishing an Elo (GDPval-AA Elo not verified → no verified public score found)
- MCP-Atlas: **77.3** (Anthropic launch chart, vs 4.6's 62.7/75.8 depending on table — two Anthropic reproductions disagree on the 4.6 value, 4.7 constant at 77.3)
- OSWorld-Verified: **78.0%** (Anthropic); OSWorld 2.0: **18.2%** adaptive / 13.9% base (OSWorld 2.0 paper via BenchLM)
- BrowseComp: **79.3%** (Anthropic — down from 84.0% on Opus 4.6)
- Claw-Eval: no verified public score found (2026-10 leaderboard tops out at Opus 4.6 70.4%; Opus 4.7 absent)
- CursorBench: **70%** (Cursor CEO Michael Truell, quoted in Anthropic announcement; Opus 4.6 58%)
- Finance Agent v1.1: **64.4%** SOTA (Anthropic); Vals' separate Finance Agent v2: **51.51% ±0.49**, rank 36/76
- Harvey BigLaw Bench: **90.9%** at high effort (Anthropic/ComputingForGeeks); Vals' Harvey Legal Agent Benchmark: **6.67%** (different harness/standard, both listed)

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (Anthropic launch chart) / **91.4%** (Artificial Analysis) / **90.15% ±1.54** (Vals, rank 26/138) — three sources, ~4 pt spread, all above 90
- HLE: **54.7%** with tools, **46.9%** without (Anthropic) / **42.3%** (AA-HLE, Artificial Analysis)
- AA-LCR: **78.7%** (Artificial Analysis)
- CritPt: **12.0%** (Artificial Analysis) — low
- Artificial Analysis Intelligence Index: **40.7** (Artificial Analysis); BenchLM overall **66.98/100, rank #27 of 932** (base) and **67.98–68.95, #21–23** (adaptive variant, partial coverage caveat)
- Omniscience Accuracy / Hallucination Rate: **48.9% / 42.3%** (Artificial Analysis) — hallucination rate notably high
- MMLU Pro: **89.87% ±0.30**, rank 8/138 (Vals); ARC-AGI-2: **75.8%**, ARC-AGI-3: **0.2%** (ARC Prize data via BenchLM); AA-IFBench 58.6%
- FrontierMath (legacy): **43.8%** (via BenchLM)

Coding:

- SWE-bench Verified: **87.6%** (Anthropic, vs Opus 4.6 80.8%) / **82.00% ±1.72**, rank 22/88 (Vals AI independent run) — the largest source conflict on this page; both listed
- SWE-bench Pro: **64.3%** (Anthropic, vs 53.4% on 4.6; confirmed in the Opus 4.8 system card table via Vellum)
- LiveCodeBench (Vals): **85.07% ±1.01**, rank 36/143
- Vibe Code Bench v1.1: **71.00% ±4.51**, rank 35/110 (Vals; BenchLM coding swing vs 4.6's 57.57%)
- AA Coding Index: **73.6%** (Artificial Analysis)
- FrontierCode 1.1 Main: **38.5%** (Cognition via BenchLM); React Native Evals 82.8%
- MedCode: **54.86%**, rank 7/106; SAGE: **56.10%, rank 1/91** (Vals)

Long context:

- MRCR v2 128K–256K: **59.2%** (OpenAI comparison table cited by BenchLM) — mediocre retrieval for a 1M window; no 1M-needle figure published for 4.7 (its predecessor Opus 4.6 scored 76% on MRCR v2 8-needle 1M). Long-context decay research (ATLAS, arXiv 2605.28079) covers Opus 4.6 (8.5% decay, best in class), not 4.7 → no verified public score found at 1M.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 88.6% (AA), MCP-Atlas 77.3, OSWorld-Verified 78.0, TB2.0 69.4% and TB2.1 68.5% (Vals) are solidly frontier-adjacent; capped below 90 by Terminal-Bench sitting ~20 points under the 88%+ frontier reference, BrowseComp regressing vs 4.6, and no public Tau3/Claw-Eval number.
- **Reasoning: 85/100.** GPQA-D 94.2/91.4/90.15 across three sources, HLE-with-tools 54.7% and AA-LCR 78.7% are frontier-class; capped by AA Intelligence Index 40.7 (mid-tier vs 60+ frontier ref), CritPt 12.0%, and a 42.3% hallucination rate on AA-Omniscience.
- **Context window: 95/100.** 1M total / 128K output verified on Bedrock and Vals — top tier mapping; not 100 because MRCR v2 retrieval is only 59.2% at 128K–256K and no ≥512K retrieval measurement exists for this model.
- **Multimodal: 85/100.** Text + image (2,576 px long edge, ~3.75 MP, 3.3× prior Claude) + PDF in, text out only, no audio/video — upper end of the 75–90 band on CharXiv-R 91.0 (w/ tools), MMMU-Pro 78.8 (AA) / 85.55 (Vals); non-text output absence keeps it under 90.
- **Coding: 87/100.** SWE-bench Verified 87.6% (vendor) / 82.0% (Vals), SWE-bench Pro 64.3%, LiveCodeBench 85.1%, Vibe 71.0%, AA Coding Index 73.6% — clearly top-tier; capped by SWE-Pro still ~15 points behind the current frontier (Opus 4.8 69.2%, Opus 5 79.2%) and the vendor-vs-independent 5.6-point SWE-V gap.
- **Cost efficiency: 45/100.** $5/$25 per 1M is premium-tier pricing ($3/$15 ≈ 60, $10/$50 ≈ 30 per methodology) with no free tier; cached input $0.50 and batch 50% discount soften it slightly.
- **Overall Score: 86/100.** Mean of the five quality dims (78+85+95+85+87)/5 = 86.0 — best-fit recommendation: the default high-reliability pick for unattended long-running coding/agent work when budget allows, but Opus 4.8 supersedes it at the same price.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-18
- Method: public internet research (Anthropic announcement + system card, Amazon Bedrock model card, Vals AI, Artificial Analysis via BenchLM, press reproductions); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
