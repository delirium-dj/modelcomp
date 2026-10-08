# Grok 4.6 — findings by Ling 3.1 Flash

- Source: xAI / SpaceXAI (`xai/grok-4.6`; xAI API, Cursor, Grok Build)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's August-2026 frontier refinement of Grok 4.5 — AA Intelligence Index 61 (ties GPT-5.6 Sol, two behind Claude Opus 5) with best-in-table GDPval-AA v2 (1753), AA-Briefcase (1577) and Harvey LAB (15.8%), at $2/$6 per 1M — a knowledge-work leader that trails on DeepSWE (65.9%) and Terminal-Bench v3.0 (26%).
- **Provider / access:** xAI API (Responses, Chat Completions; reasoning low/medium/high-default/xhigh; function calling, web search, X search, code execution), Cursor and Grok Build (2× included usage the first week); fast variant at 2× price; rate limits 150 req/s, 50M tokens/min (us-east-1, us-west-2). `noFreeId`.
- **Release / knowledge:** 2026-08-12; knowledge cutoff 2026-02-01.
- **IDs:** `xai/grok-4.6` / `grok-4.6` (Vercel lists `spacexai/grok-4.6`).
- **Context window:** 500,000 tokens in and out (no text output limit); requests whose prompt reaches 200K tokens bill the WHOLE request at double rates ($4/$12, cached $1.00) — the usable-at-list-price window is effectively 200K.
- **Modalities:** text, image in; text out.
- **Pricing (as of 2026-10-02):** $2.00/$6.00 per 1M input/output, cached $0.50/M (<200K prompt); ≥200K: $4.00/$12.00, cached $1.00/M. AA measured: effective input $0.7249/M, effective output $6.125/M (90.3% cache-hit rate), 94 tok/s, 0.62s latency, 0.08% tool-call error rate, 4.00% structured-output error rate, $0.84 per Intelligence-Index task.
- **Architecture:** proprietary (refines Grok 4.5's foundation); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (xAI launch table, 2026-08-12; Grok 4.6 High vs Grok 4.5 High / GPT-5.6 Sol Max / Fable 5 Max):

- AA Intelligence Index: **61** (GPT-5.6 Sol 61, Fable 5 62, Grok 4.5 56; Claude Opus 5 ~63 per eesel) — ties GPT-5.6 Sol
- GDPval-AA v2: **1753** — #1 in table (Fable 5 1741, GPT-5.6 Sol 1728, Grok 4.5 1526)
- AA-Briefcase: **1577** — #1 in table (Fable 5 1574, GPT-5.6 Sol 1502, Grok 4.5 1313)
- APEX-Agents: **57.5%** (Fable 5 59.2, GPT-5.6 Sol 56.7, Grok 4.5 47.1)
- APEX-SWE: **56.4%** (Fable 5 58.8, Grok 4.5 53.6)
- Terminal-Bench v3.0: **26.0%** (GPT-5.6 Sol 34.6, Fable 5 34.1, Grok 4.5 15.7) — 8.6 points behind Sol
- Harvey LAB (Vals, legal): **15.8%** — #1 in table (Fable 5 11.3, Grok 4.5 12.9, GPT-5.6 Sol 2.5)
- MCP Atlas / BrowseComp / OSWorld / τ-Bench / Toolathlon: no verified public score found
- Positional claims: finishes tasks in half the turns of Claude Opus 5; engineers independently reported ~3× speedups (one measured 3m18s vs 12m02s on the same task)

Reasoning / knowledge:

- AA Intelligence Index 61 (nine-benchmark composite) — see above
- Harvey LAB (Vals) 15.8% — best-in-table legal reasoning
- GPQA Diamond / HLE / AA-Omniscience (standalone): no verified public score found

Coding:

- DeepSWE v1.1: **65.9%** (GPT-5.6 Sol 73.0, Fable 5 70.0, Grok 4.5 54.0) — 7.1 points behind Sol, under the 74% frontier bar
- CursorBench v3.2: **69.9%** (Fable 5 70.5, GPT-5.6 Sol 67.2, Grok 4.5 66.7)
- FrontierCode v1.1 (Extended): **61.3%** (Fable 5 63.6, GPT-5.6 Sol 60.6, Grok 4.5 56.6)
- Terminal-Bench v3.0: **26.0%** — see above
- SWE-bench Verified / SciCode / LiveCodeBench / AA Coding Index: no verified public score found

Long context / multimodal:

- 500K window; no MRCR/RULER/GraphWalks score published
- MMMU / vision suite: no verified public score found

### Normalized scores (1–100)

- **Tool use: 82/100.** Best-in-table GDPval-AA v2 1753 (clearing the ~1750+ frontier bar), AA-Briefcase 1577 and Harvey LAB 15.8%, plus APEX-Agents 57.5%, AutomationBench-AA 63% and Terminal-Bench 2.1 at 88.4% (AA's own run) support a high score; Terminal-Bench 4.0 at 17.2% (Vals, #26 of 45), Terminal-Bench v3.0 at 26.0% (8.6 behind Sol), AA-Omniscience at 28 and the missing BrowseComp/MCP Atlas figures cap it.
- **Reasoning: 78/100.** The Vals Index of 71.824% (6th of 46, narrowly behind Muse Spark 1.2) and best-in-table Harvey LAB 15.8% are the anchors; on the current AA Intelligence Index v4.3.2 Grok 4.6 reads 44 (High) — behind GPT-5.6 Sol Max (46.97), Fable 5 (49.63) and Opus 5 Max (50.78) — with HLE 42%, CritPt 18%, GDP.pdf 18% and SciCode 56% as components; the launch-era 61 was the v4.1.1 read (AA independently measured 60.92), a different index version. No standalone GPQA Diamond figure was captured.
- **Context window: 80/100.** 500K-token window (in and out) sits between the 200K=70 and 1M=95 references; the ≥200K whole-request rate doubling ($4/$12) means the list-price window is effectively 200K, a usage caveat.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU or vision-suite figure was captured.
- **Coding: 80/100.** SWE-bench (Vals) **95.6%** (4th of 15 — top tier, up ~9 points on Grok 4.5) and LiveCodeBench **88.2%** (top 4) are strong independent fills, with CursorBench v3.2 69.9%, FrontierCode v1.1 (Extended) 61.3%, APEX-SWE 56.4%, Vibe-Code 76.2% (10th) and CursorBench 4.0 41.4% (xhigh) solid; DeepSWE v1.1 65.9% is under the 74% frontier bar, Terminal-Bench v3.0 26.0% trails Sol by 8.6 points, and LiveBench agentic coding slipped to 54.2 (from 4.5's 56.5).
- **Cost efficiency: 80/100.** $2/$6 per 1M (cached $0.50/M) interpolates to ~80 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references — tying GPT-5.6 Sol's intelligence at a fifth of its output rate ($6 vs $30); AA's effective $0.7249/M input (90.3% cache hits) and $0.84 per Index task are offsets, the ≥200K rate doubling a premium.
- **Overall Score: 77/100.** (82+78+80+65+80)/5 = 77.0 → 77 — the best price-to-intelligence deal at the frontier ($2/$6, #1 GDPval-AA and AA-Briefcase at launch, SWE-bench 95.6% and LiveCodeBench 88.2% on Vals) whose current-index composite (AA 44) sits behind GPT-5.6 Sol Max, with DeepSWE 65.9% and TB v3.0 26.0% trailing the coding leaders and the 200K pricing cliff capping the context score.

---

## Update 2026-10-08 (6-day re-research)

AA v4.3.2 rebasing, Vals, Ridge and Codersera rows found:

- **AA Intelligence Index version drift (the key finding):** the launch's 61 (xAI claim) / 60.92 (AA's own v4.1.1 measurement) was the index version live on 2026-08-12; on the current v4.3.2 Grok 4.6 reads **44** (High/Xhigh), 43 (Medium), 35 (Low) — behind Opus 5 Max (50.78), Fable 5 (49.63) and GPT-5.6 Sol Max (46.97). The drop is the index rebase, not a model change; v4.1.1 and v4.3.2 numbers must not be compared
- v4.3.2 component reads (Medium, vs GPT-5.6 Sol Max): AA-Briefcase 1483 vs 1478, GDPval-AA v2.1 1617 vs 1611, AutomationBench-AA 63% vs 60%, Terminal-Bench 4.0 13% vs 40%, SciCode 56% vs 57%, HLE 42% vs 49%, GDP.pdf 18% vs 27%, CritPt 18% vs 32%, AA-Omniscience 28 vs 22, AA-LCR 81% vs 84% — Grok 4.6 leads on the knowledge-work components, trails on the reasoning ones
- Vals Index: **71.824%** (6th of 46, narrowly behind Muse Spark 1.2's 71.877); SWE-bench (Vals) **95.60%** (4th of 15 — "the strongest result," up ~9 pts on Grok 4.5); LiveCodeBench **88.2%** (top 4); Vibe-Code 76.2% (10th, behind Muse Spark 1.2, Sonnet 5, Kimi K3); WebDev Arena 5th; LiveBench agentic coding 54.2 (down from Grok 4.5's 56.5)
- Ridge (as of 2026-10-08): SWE-bench Verified 95.6% (Vals, 4th of 15); Terminal-Bench 4.0 **17.17%** (Vals mini-swe-agent, #26 of 45 — same score as Kimi K3); Terminal-Bench 2.1 (archived) **78.28%** (Vals Terminus 2, #13 of 76); CursorBench 4.0 41.4% (xhigh, best published — Grok has no max run); Arena Elo 1507 (Arena+)
- Terminal-Bench version trap documented: xAI reports v3.0 (26.0%), AA reports v2.1 (88.39%), Vals reads v2.1 at 78.28% — different benchmark versions, not comparable in either direction
- Cost per task (AA): $0.38–$1.40 across effort levels; $1,557 to run the full Intelligence Index (vs GPT-5.6 Sol's $3,465); effective input $0.7249/M (90.3% cache hits)
- **Scores revised**: Tool 86→82 (TB 4.0 17.2% Vals and AA-Omniscience 28 cap it; current-index composite 44), Reasoning 85→78 (Vals Index 71.8/6th anchors; AA Index 44 current read), Coding 77→80 (SWE-bench 95.6% and LiveCodeBench 88.2% Vals fills); Overall 79→77 ((82+78+80+65+80)/5 = 77.0)

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (xAI Grok 4.6 announcement + model docs, Artificial Analysis via eesel AI, Vercel AI Gateway); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_6.md`, using the same headings.
