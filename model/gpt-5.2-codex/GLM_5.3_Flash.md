# GPT-5.2 Codex — findings by GLM 5.3 Flash

- Source: OpenAI (`gpt-5.2-codex`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2-Codex (hyphenated vendor style)
- **Short description:** OpenAI's coding-optimized version of GPT-5.2 for agentic software engineering in Codex: long-horizon work via native context compaction, large refactors and migrations, Windows-based agent workflows, screenshot/diagram understanding, and defensive-cybersecurity strength. Released 2025-12-18; **now deprecated** in OpenAI's model catalog in favor of newer Codex/GPT generations — legacy reference only for new workflows.
- **Provider / access:** OpenAI API (`gpt-5.2-codex`, Responses API; "underlying model snapshot is regularly updated" per llm-stats) and Codex surfaces for paid ChatGPT users. API access opened ~2026-01-14 after the Dec 18 Codex-first launch.
- **Release / knowledge:** 2025-12-18 (OpenAI announcement; Codex surfaces), API availability ~2026-01-14 (llm-stats); knowledge cutoff not stated in the announcement.
- **IDs:** `openai/gpt-5.2-codex` (OpenAI API) — no Free ID exists on Zen
- **Context window:** 400K tokens in / 128K out (llm-stats provider row, OpenAI-listed pricing/context)
- **Modalities:** text + image input (screenshot and diagram understanding), text output; reasoning-optimized for agentic coding; tool use via Codex harness; JSON mode: not verified.
- **Pricing (as of 2026-10-30):** $1.75/Mtok input, $14.00/Mtok output (llm-stats/OpenAI row; no cached-input rate listed). Legacy/deprecated SKU — pricing may change without notice.
- **Architecture:** proprietary, closed weights; version of GPT-5.2 further optimized for agentic coding (context compaction, large diffs, Windows environments, defensive cybersecurity). Parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals AI SWE-bench leaderboard row exists for "GPT 5.2 Codex" (vals.ai) — the captured table did not expose column semantics, so its four values are not citable as verified per-benchmark scores here
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / OSWorld: no verified public score found for this exact ID
- Long-horizon agent capability (context compaction, multi-hour refactors/migrations) is documented qualitatively by OpenAI without a public harness number

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / Artificial Analysis Intelligence Index: no verified public score found for this exact ID (aggregators list the model but print no AA Index row)

Coding:

- SWE-Bench Pro: **56.4%** (public numbers compiled on Hacker News at launch; a parallel compilation lists **56.8%** — two public snapshots, both cited; vs GPT-5.2 base 55.6%)
- SWE-bench Verified: **~80%** (Hacker News public-number compilation, marked approximate; Reddit independently discusses GPT-5.2-class at 80%)
- LiveCodeBench / SciCode / Vibe Code Bench / DeepSWE: no verified public score found for this exact ID
- Positioning at release: "the most advanced agentic coding model yet for complex, real-world software engineering" (OpenAI, 2025-12-18) — since superseded by GPT-5.3/5.4/5.6-Codex and the GPT-6 line

Long context:

- 400K window with native context compaction for long-horizon continuity; no MRCR/RULER retrieval figure published — no long-context retrieval reported

### Normalized scores (1–100)

- **Tool use: 70/100.** Verified evidence is thin for this ID: no Terminal-Bench/Tau3/GDPval rows published; the score rests on SWE-Bench Pro 56.4% (a demanding agentic-coding harness), the documented long-horizon compaction behavior, and Vals' measured row (values not citable) — capped hard by missing agent-benchmark coverage.
- **Reasoning: 66/100.** No GPQA/HLE/LCR/CritPt rows published for the exact ID; scored conservatively from the coding-agent evidence base (SWE-V ~80% implies strong multi-step reasoning) and capped until independent reasoning benchmarks exist.
- **Context window: 75/100.** Verified 400K in / 128K out (upper-middle of the 200K–500K tier) with documented context compaction; not a 1M-class window.
- **Multimodal: 65/100.** Text + image (screenshot/diagram) input, text output; no audio/video/PDF input documented.
- **Coding: 78/100.** SWE-Bench Pro 56.4–56.8% and SWE-bench Verified ~80% were frontier-class at the 2025-12 launch and the model was purpose-built for large agentic diffs; capped by the absence of LiveCodeBench/SciCode rows and by successor models having moved the frontier.
- **Cost efficiency: 72/100.** $1.75/$14 sits between the ~$1.25/$4.25 (≈88) and $3/$15 (≈60) reference bands, closer to the premium end per output token; no cached-input discount listed.
- **Overall Score: 70.8/100.** Mean of the five quality dims (70+66+75+65+78)/5 = 70.8 → 71. Best fit today: none for new work — the SKU is deprecated; it remains a legacy comparison point for 2025-era agentic coding baselines.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-30
- Method: public internet research — OpenAI launch post, OpenAI model catalog deprecation status via The Rundown AI's tool archive, llm-stats provider/spec row, Hacker News public-benchmark compilations, vals.ai leaderboard presence, alexlavaee's GPT-5.2-era comparison table; missing reasoning/agent rows recorded as "no verified public score found". Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
