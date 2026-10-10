# Claude Sonnet 5.5 — findings by Space Bunny

- Source: Anthropic (`claude-sonnet-5-5`)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What changed since the first pass:** the first pass scored this on Anthropic's launch table
> alone and flagged the absence of independent Terminal-Bench data. Vals AI has since run the full
> suite, and the picture moved in both directions — Sonnet 5.5 is **#2 of 43 on the Vals Index,
> ahead of Opus 5.5**, and **#1 of 101 on planted-bug repair**, while its legal-agent score turns
> out to be near-floor.

## Model card

- **Name:** Claude Sonnet 5.5 (paid tier; no OpenCode Zen Free ID)
- **Short description:** Anthropic's mid-tier Claude 5.5 model, released 2026-09-28 — the fast everyday complement to Opus 5.5 for scoped coding, bug fixes and polished documents, at half Opus's token price with a native 1M context window.
- **Provider / access:** Claude Platform API (`claude-sonnet-5-5`); Claude Platform on AWS; Amazon Bedrock (`anthropic.claude-sonnet-5-5`); Google Cloud; Microsoft Foundry (Global Standard only). Available in Claude Code, claude.ai and the Claude apps.
- **Release / knowledge:** Released 2026-09-28; knowledge cutoff June 2026; retirement not sooner than 2027-09-28.
- **IDs:** `claude-sonnet-5-5` (no date suffix); `anthropic.claude-sonnet-5-5` on Bedrock.
- **Context window:** 1,048,576 tokens native (no beta header, no long-context premium); max output 128K, up to 300K via the Message Batches API.
- **Modalities:** Text and image in, text out (PDF via document input); adaptive thinking always on with five effort levels — `low`, `medium`, `high`, `xhigh`, `max` — default `high` on the Platform and `medium` in Claude Code and the apps; the lowest setting is `between_tools`, not "off". Tool use, structured outputs, zero data retention for eligible customers. First Sonnet with Opus-class cyber safeguards; also reachable via the Cyber and Life Sciences Verification Programs.
- **Pricing (as of 2026-10-10):** $2 input / $10 output per 1M; $0.20 cache reads (5% of base); cache writes $2.50 (5-minute) / $4 (1-hour); Batch 50% off; US-only inference 1.1x. Paid, no free tier.
- **Architecture:** Proprietary; tokenizer unchanged from Sonnet 5.

### Raw benchmarks found

*Anthropic launch table and Sonnet 5.5 System Card (vendor, max effort unless noted):*

- Terminal-Bench 4.0 **70.6%** (Sonnet 5: 10.3%; Opus 5.5: 66.4% at Xhigh); CursorBench 4.0 **55.5%**; FrontierCode 1.1 Main **52.1% at Xhigh / 46.2% at Max** (Max regressed because code-review subagents timed out and made out-of-scope edits)
- GDPval-AA v2.1 **1,844 Elo**; AA-Briefcase v1.1 **1,811 Elo** — both within ~2 and ~11 Elo of Opus 5.5
- HLE **64.5% with tools / 56.9% without**; OSWorld 2.1 **80.1% partial / 43.5% strict**; Chartography **61.6% no-tools / 90.2% with tools**
- SWE-bench Pro **81.3%**; Multilingual **90.3%**; Multimodal **54.3%**; DeepSWE v1.1 **71.0%**; FrontierSWE v2 **61.9%** (Proximal); ProgramBench **79.7%**; Terminal-Bench-Science 0.1 **59.9%**; Toolathlon-Verified **77.8%**; ArXivMath **86.8 / 95.2**; OfficeQA **76.9 / 65.6**
- HealthBench Professional **69.2%** and AutomationBench (Zapier) **44.7%** — both **ahead of Opus 5.5** (65.6% / 42.5%)
- Anthropic no longer publishes SWE-bench Verified, GPQA Diamond, MMLU-Pro or AIME for this model, and it was absent from ARC Prize's verified results as of 2026-10-04

*Independent evaluations:*

- **Vals Index: 67.04% ±0.92 — #2 of 43**, ahead of Opus 5.5 at 66.97% and behind only Gemini 4 Argon at 68.90% (updated 2026-09-29); $21.34 per index test. **First on Code Migration; first on Vibe Code Bench**
- **Terminal-Bench 4.0 — three measurements:** 70.6% (Anthropic), **64.14% ±1.01** (Vals AI, #2 of 42, with Sonnet 5 as refusal fallback), **63.64%** (Artificial Analysis, #1 on its own board)
- **Bug Hunt Bench (105 planted defects): 51.3 fixed — #1 of 101**; GPT-6 Astra 45.0, Opus 5.5 41.7
- **LiveBench code generation: 95.78% — #1 of 66**; Opus 5.5 91.55%
- Vibe Code Bench v1.1 **92.39%** (Vals); Terminal-Bench 2.1 **86.06%** (Vals, medium split); Terminal-Bench-Science 0.1 **53.33%** (Vals) vs Anthropic's 59.9%
- Artificial Analysis Intelligence Index: **56** at max effort (rank 2–3 of 216); effort ladder with measured cost per index task — low 36/$0.41, medium 41/$0.59, high 47/$1.08, xhigh 52/$2.74, max 56/$7.60; max output speed 139 tok/s
- **Harvey Legal Agent Benchmark: 2.92%** (Vals) and MedCode **52.92%** — near-floor on regulated professional work
- Mercor APEX (long-horizon professional agent tasks): **75.5%** (Argon 82.2, Opus 5.5 73.5)
- LMArena text arena (`claude-sonnet-5.5-xhigh`): **1,471 ±10** on 3,145 votes, rank 45 (2026-10-05) — a new, low-vote listing
- Independent hands-on runs: a chess-engine build at Opus-grade correctness for 30–51% less, but with **two of twenty self-authored test expectations invented from memory**; a Jira Forge app scoring 0.5508 against Opus 5.5's 0.9767 (harness faults partially corrected on 2026-10-10); a payments app on Gauntlet 7.2 at 0.7984 vs Opus 5.5's 0.7926 — level

### Normalized scores (1–100)

- **Tool use: 94/100.** Top of the field on the agentic-terminal suite across all three sources (70.6% / 64.14% / 63.64%), **#2 of 43 on the Vals Index and ahead of Opus 5.5**, GDPval-AA 1,844 and AA-Briefcase 1,811 within a few Elo of Opus, Toolathlon-Verified 77.8%, Mercor APEX 75.5%. Docked by the Harvey Legal Agent Benchmark at 2.92%, the weakest dimension in the model.
- **Reasoning: 89/100.** AA Intelligence Index 56 at max — second only to Opus 5.5 — with HLE 64.5%/56.9% and an Omniscience profile of 54% accuracy at a 47% hallucination rate, meaningfully better calibrated than Opus 5.5's 66%/59%. Held back by Anthropic publishing no GPQA, MMLU-Pro or AIME row at all, and by the 2.92% legal-agent result.
- **Context window: 92/100.** A native 1M input window with 128K output (300K on Batch) and no long-context premium, plus two measured long-horizon signals: ProgramBench at 79.7% and AA-Briefcase at 1,811 Elo. Still no MRCR/RULER/GraphWalks figure, so the ceiling is spec-plus-proxy rather than measured retrieval.
- **Multimodal: 84/100.** A real visual step up for the tier — Chartography 61.6% without tools (from Sonnet 5's 15.6%) and 90.2% with them, OSWorld 2.1 computer use at 80.1% partial, SWE-bench Multimodal 54.3%, and the first Sonnet to beat Pokémon Red from screenshots alone. Capped by text-only output.
- **Coding: 93/100.** **#1 of 101 on planted-bug repair (51.3/105)**, **#1 of 66 on LiveBench code generation (95.78%)**, Vibe Code Bench 92.39%, SWE-bench Pro 81.3%, Multilingual 90.3%, DeepSWE 71.0%, CursorBench 55.5% within two points of Opus, and Terminal-Bench 4.0 leading the board in all three sources. Held off 95+ by FrontierSWE v2 at 61.9% and by the Forge 1.0 result, where it lost on edge UI plumbing its own reasoning got right.
- **Cost efficiency: 72/100.** $2/$10 with a 95% cache-read discount is half Opus 5.5's sticker, and at `medium` effort AA measures **$0.59 per index task** at index 41 — already better than Sonnet 5's best at a fraction of the price. The catch is effort economics: the same index task runs **$7.60 at max**, and Vals prices a full run at $21.34, so the half-price advantage shrinks once token behaviour is counted.
- **Overall Score: 90/100.** Best fit as the default workhorse for scoped coding, bug fixing and polished documents at medium-to-high effort, where independent measurement now puts it level with or ahead of Opus 5.5 on real professional tasks; keep Opus for open-ended work needing sustained judgment, and keep a human in the loop on regulated legal or medical tasks.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: second-pass public internet research across Anthropic's Sonnet 5.5 launch post and System Card, the Claude Sonnet product page, Vals AI's Vals Index and Terminal-Bench 4.0 leaderboards and per-benchmark rows, Artificial Analysis's model and effort-ladder data, AIEvals' independent-vs-publisher tables, BenchLM/AIEvals bug-hunt and LiveBench code-generation rankings, and independent hands-on build reviews; three independent Terminal-Bench 4.0 readings and the Vals vs AA index divergence are reported side by side; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Sources

- Anthropic — Introducing Claude Sonnet 5.5 (2026-09-28): https://www.anthropic.com/claude-sonnet-5-5
- Anthropic — Claude Sonnet page (pricing and availability): https://www.anthropic.com/claude/sonnet
- Vals AI — Vals Index leaderboard (Sonnet 5.5 67.04%, #2 of 43, updated 2026-09-29): https://vals.ai/benchmarks/vals_index
- Vals AI — Terminal-Bench 4.0 leaderboard and methodology: https://vals-ai.com/benchmarks/terminal-bench-4
- AIEvals — Terminal-Bench 4.0 (Sonnet 5.5 63.64% AA vs 64.14% Vals vs 70.6% Anthropic): https://aievals.app/benchmarks/terminal-bench-4
- AIEvals — Claude Opus 5.5 comparison table incl. Sonnet 5.5 rows: https://aievals.app/models/claude-opus-5-5
- The Aggregate Digest — Sonnet 5.5 matches Opus 5.5 on Vals; Bug Hunt Bench #1 of 101; LiveBench code gen #1 of 66: https://buttondown.com/theaggregate/archive/claude-sonnet-55-matches-claude-opus-55-on-vals/
- Apidog — Sonnet 5.5 vendor vs independent benchmark split: https://apidog.com/blog/claude-sonnet-5-5-benchmarks/
- Emergent.sh — Sonnet 5.5 effort ladder and cost-per-task economics: https://emergent.sh/learn/claude-sonnet-5-5-benchmarks
- OrcaRouter — Gemini 4 Argon vs Opus 5.5: two boards, two verdicts (Vals Index ordering): https://www.orcarouter.ai/blog/gemini-4-argon-vs-claude-opus-5-5
- LeanZero — Sonnet 5.5 vs Opus 5.5 on Gauntlet 7.2 and Forge 1.0 (independent app-building evals): https://leanzero.net/blog/claude-sonnet-5-5-vs-opus-5-5
- Thomas Wiegold — independent Sonnet 5.5 vs Opus 5.5 build review (chess engine, invented test data): https://thomas-wiegold.com/blog/claude-sonnet-5-5-review/