# GPT-5.1 Codex Mini — findings by Qwen 3.8 Flash

- Source: OpenAI (`gpt-5.1-codex-mini`; curated id `opencode/gpt-5.1-codex-mini`), cross-checked against the SWE-bench Verified leaderboard, OpenAI Developers' GPT-5.1-for-developers announcement, and independent price/spec trackers (llm-stats, pricepertoken, developer.puter, opencode.ai/data)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1 Codex Mini
- **Short description:** The **compact, budget lane of OpenAI's GPT-5.1 Codex agentic-coding family** (shipped with the Nov-2025 GPT-5.1 developer wave). A tuned software-engineering agent — terminal/file-editing harness, native tool calling — that trades the Max tier's ceiling for cost and token efficiency: OpenAI notes it "performs better with **medium** reasoning than GPT-5.1-Codex does while using **~30% fewer thinking tokens**." Best understood as the default when the full Codex-Max is overkill for the task.
- **Provider / access:** OpenAI API + Codex harness (also reachable via routers such as OpenCode). No open weights.
- **Release / knowledge:** 2025-11-13 (GPT-5.1 for developers); knowledge cutoff in the GPT-5.1 family window (not separately published for this endpoint).
- **IDs:** `gpt-5.1-codex-mini`; siblings `gpt-5.1-codex`, `gpt-5.1-codex-max` (SWE-V 77.9), and the earlier `gpt-5-codex`; general-purpose sibling `gpt-5-mini`.
- **Context window:** **400,000 tokens** (consistent across llm-stats / pricepertoken / developer.puter / opencode.ai) — the same span as its Codex siblings.
- **Modalities:** **text-only** in / text out (a software-engineering agent, no image/audio); reasoning yes (adaptive, medium-by-default for this tier); tool calls yes.
- **Pricing (as of 2026-10-20):** **$0.25/M input, $2.00/M output** — roughly a fifth of the Codex-Max input rate and half its output rate, the core of its "cheaper agentic coding" pitch.
- **Architecture:** proprietary; a distilled/efficiency-tuned Codex variant of GPT-5.1 optimized for agentic coding with fewer thinking tokens per task.

### Raw benchmarks found

> A **leaderboard-verified** coding number plus vendor efficiency claims; no published GPQA/AIME/HLE or independent reasoning-index single score for this exact mini endpoint — the general "thin independent evidence" caveat in the curated entry holds.

Coding (agent):

- SWE-bench Verified: **66.0%** (`mini-SWE-agent`, logged 2025-11-20) — solidly capable, but below `gpt-5.1-codex-max` (77.9) and `gpt-5-codex` (~74.3) in the same family; ranks as the value tier, not the ceiling.
- Efficiency: "~30% fewer thinking tokens" than GPT-5.1-Codex at a *higher* medium-reasoning SWE-V result (OpenAI claim).

Reasoning / knowledge:

- GPQA Diamond / AIME / HLE: **no absolute published** for this mini endpoint (the Codex lane is scored on software tasks, not the reasoning-suite headline numbers).

Tool use / agent:

- Native agentic tool calling in the Codex terminal/edit harness; **no standalone τ²-bench / BFCL / BrowseComp score transcribed** for this ID.

Long context / multimodal:

- 400K window (same as siblings); **no MRCR/RULER retrieval score published**; text-only — no vision/audio lanes.

### Normalized scores (1–100)

- **Tool use: 66/100.** Built to operate a real coding harness (shell, file edits, tool calls) reliably, but there is no published standalone agentic-tool benchmark (τ²/BFCL) for this endpoint, so its orchestration strength is inferred from the Codex design rather than verified.
- **Reasoning: 62/100.** The deliberate trade-off of a "Mini": efficient medium-reasoning, but a modest ceiling and zero published reasoning-suite absolutes keep it mid-tier — capable, not deep.
- **Context window: 82/100.** A genuine **400K** window matching its Codex siblings is ample for repo-scale agentic work; capped below the 1M/2M open-weight field and docked for no published long-context retrieval proof.
- **Multimodal: 15/100.** Text-only software-engineering agent (no image/audio in or out) — the template's text-only floor.
- **Coding: 78/100.** Its home turf: **66.0%** SWE-bench Verified with ~30% fewer thinking tokens makes it an efficient, dependable agentic coder — but the family's own Max/standard Codex outscore it, so it's the value pick, not the top of the coding range.
- **Cost efficiency: 88/100.** $0.25/$2.00 per 1M with a deliberately low thinking-token budget is the whole point of the Mini lane — high-volume agentic coding at a fraction of Codex-Max's cost.
- **Overall Score: 60.6/100.** Half-up mean of the five quality dims (66+62+82+15+78)/5 = 60.6. Best fit: **high-volume, cost-sensitive agentic coding** — routine repo edits, scaffolding and tool-driven software tasks where Codex-Max's ceiling isn't worth the price — with the frontier ceiling, deep reasoning and multimodality left to its bigger siblings.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-20
- Method: public internet research — OpenAI Developers "Introducing GPT-5.1 for developers" (release 2025-11-13, faster adaptive reasoning, extended prompt caching), the SWE-bench Verified leaderboard (66.0% via mini-SWE-agent, 2025-11-20), OpenAI Developers' efficiency claim (medium reasoning beats GPT-5.1-Codex at ~30% fewer thinking tokens), and independent spec/price trackers llm-stats / pricepertoken / developer.puter / opencode.ai/data ($0.25/$2.00 per 1M, 400K context). openai.com/index returned 403 to fetch, so specs were triangulated across those mirrors. Scores are normalized 1–100 interpretations, not official vendor scores; missing GPQA/AIME/tool-bench absolutes are flagged as gaps, not filled from the Codex-Max sibling. Curated `meta.json` is scaffolded ("128K / Text in-out / Standard pricing") and was overridden by first-party/tracker evidence (400K context; $0.25/$2.00; text-only retained).
- Revisit trigger: an Artificial Analysis / independent reasoning-index number for the codex-mini endpoint, or published GPQA/AIME/τ² absolutes; supersession by a later Codex-Mini generation.
- Future sources: add a new file next to this one, e.g. `Gemini_2.5_Flash.md`, using the same headings.
