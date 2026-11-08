# MiniMax M2.5 — findings by GLM 5.3 Flash

- Source: MiniMax (`MiniMax-M2.5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5 (miniMax-M2.5; a faster M2.5-Lightning variant ships alongside at identical capability)
- **Short description:** MiniMax's February 2026 open-weights flagship, billed as the first production model designed natively for agent scenarios — coding, agentic search/tool use, and office work (Word/PowerPoint/Excel) at extreme low cost. Predecessor of M2.7 and M3.
- **Provider / access:** MiniMax API `MiniMax-M2.5` (platform.minimax.io; Anthropic-compatible text API), MiniMax Agent app. Open weights on Hugging Face (`MiniMaxAI/MiniMax-M2.5`). Not on the live OpenCode Zen roster (fetched 2026-10-16) — no Free ID on Zen.
- **Release / knowledge:** released 2026-02-12 (official announcement + llm-stats agree); no knowledge-cutoff statement found.
- **IDs:** `MiniMax-M2.5` (MiniMax platform); `opencode/` Free ID does not exist.
- **Context window:** 1M total / 1M max output per llm-stats' MiniMax provider row. CONFLICT: llmlearner records 128K. The provider row plus the official appendix's internal AA-LCR (long-context reasoning) testing support the 1M figure; the 128K record is treated as outdated.
- **Modalities:** text in / text out (no vision, audio, or video I/O documented in the official announcement or provider row); reasoning yes (RL-trained for efficient task decomposition); tool calls yes (parallel tool calling); JSON mode not explicitly confirmed in sources consulted.
- **Pricing (as of 2026-10-16):** paid only, extremely cheap. Official: M2.5-Lightning (100 tok/s) is $0.30 in / $2.40 out per 1M and M2.5 (50 tok/s) "costs half that" → ~$0.15 in / $1.20 out; CONFLICT: llm-stats lists M2.5 at $0.300 in / $1.20 out / $0.03 cached. Either reading puts it 10–20× below Opus-class output pricing; official blog's own framing is "$1 per hour of continuous 100-tok/s running". Caching supported on both variants.
- **Architecture:** open weights, MIT license; ~230B total parameters, Mixture-of-Experts (~10B active per llmlearner — not officially confirmed in text sources); served natively at 50 tok/s (M2.5) / 100 tok/s (Lightning).

### Raw benchmarks found

Agent / tool use:

- BrowseComp: **76.3%** (official, with context management; WebExplorer agent framework)
- Wide Search / RISE: industry-leading per official post (RISE is MiniMax's internal realistic interactive search eval — no absolute number published in text)
- GDPval-MM (internal, GDPval-based): **59.0% average win rate** vs other mainstream models (official)
- Terminal-Bench 2: tested with Claude Code scaffolding (official appendix — absolute value not textually published)
- Harness generalization, SWE-bench Verified: **79.7%** on Droid and **76.1%** on OpenCode (official; both above Opus 4.6's 78.9/75.9)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- AIME25 → AA-LCR: internal testing "based on Artificial Analysis Intelligence Index methods" per official appendix (values in image, not textually citable)
- Artificial Analysis Intelligence Index: no verified independent value found in text sources

- Coding:
- SWE-bench Verified: **80.2%** (official, Claude Code scaffolding, avg of 4 runs)
- Multi-SWE-Bench: **51.3%** (official)
- VIBE-Pro: on par with Claude Opus 4.5 per official post (internal benchmark, no absolute number)
- SWE-bench Multilingual / SWE-bench Pro: tested officially (values in appendix image, not textually citable)
- **Vibe Code Bench v1.1: 14.85%** (NEW — BenchLM page now exists with this single Vals row, fetched 2026-11-07; the first independent coding measurement and it is floor-class vs the vendor's SWE-V 80.2% — the vendor-vs-independent split is documented, not averaged away)

Long context:

- No public MRCR/RULER number found; 1M window claimed at provider level (see conflict above)

### Normalized scores (1–100)

- **Tool use: 85/100.** BrowseComp 76.3%, leading search-agent results, GDPval-MM 59% win rate, and verified out-performance of Opus 4.6 on two out-of-distribution harnesses; capped by reliance on official/internal evals for the tool stack.
- **Reasoning: 76/100.** No public GPQA/HLE/LCR number is textually verifiable; scoring rests on the model's agentic reasoning proxies (SWE planning, RISE) — provisional pending independent index coverage.
- **Context window: 85/100.** 1M-token window per the provider row (128K conflicting record noted), but zero public long-context retrieval benchmarks found to verify measured depth.
- **Multimodal: 15/100.** Text-only I/O; no vision/audio support documented anywhere.
- **Coding: 80/100.** CHANGED from 84 — SWE-bench Verified 80.2% and Multi-SWE-Bench 51.3% remain officially measured, but the first independent coding row (Vals Vibe 14.85%, Nov 7) lands floor-class against them — docked per the repo's independent-evidence precedent; Opus-4.5-level VIBE-Pro positioning stands as a vendor claim only.
- **Cost efficiency: 95/100.** ~$0.15–$0.30 in / $1.20 out per 1M with MIT open weights — among the cheapest frontier-class options; not $0, so not 100.
- **Overall Score: 68/100.** CHANGED from 69 — mean of (85+76+85+15+80)/5 = 341/5 = 68.2 → 68, docked with Coding as the independent Vals row corrected the lab-only evidence base. Best fit: high-volume agentic coding, search, and office automation where cost per token dominates; wrong pick for multimodal input or when independently verified coding benchmarks are required.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-08 (re-research pass; prior 2026-10-16)
- Method: public internet re-research via direct page fetch (web-search quota exhausted): BenchLM's MiniMax M2.5 page surfaced for the first time (fetched 2026-11-07 — a single Vals row: Vibe Code Bench 14.85%, floor-class vs the vendor SWE-V 80.2%) — Coding 84→80, Overall 69→68; BenchLM also lists 128K context, sharpening the 1M-vs-128K conflict (the official provider-row 1M spec stays primary per the vendor-spec-wins precedent, conflict documented) — scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
