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

- **Tool use: 86/100.** The AA Intelligence Index of 61 (frontier cluster — ties GPT-5.6 Sol) with best-in-table GDPval-AA v2 1753 (clearing the ~1750+ frontier bar), AA-Briefcase 1577 and Harvey LAB 15.8%, plus APEX-Agents 57.5%, support a high score; Terminal-Bench v3.0 at 26.0% (8.6 behind Sol) and the missing TB2.1/BrowseComp/MCP Atlas figures cap it.
- **Reasoning: 85/100.** The AA Intelligence Index of 61 is the anchor (frontier entry, level with GPT-5.6 Sol, two behind Claude Opus 5), with best-in-table Harvey LAB 15.8% supporting; no standalone GPQA Diamond or HLE figure was captured.
- **Context window: 80/100.** 500K-token window (in and out) sits between the 200K=70 and 1M=95 references; the ≥200K whole-request rate doubling ($4/$12) means the list-price window is effectively 200K, a usage caveat.
- **Multimodal: 65/100.** text/image in with text out — the +image-in band (60–70); no MMMU or vision-suite figure was captured.
- **Coding: 77/100.** CursorBench v3.2 69.9%, FrontierCode v1.1 (Extended) 61.3% and APEX-SWE 56.4% are solid, but DeepSWE v1.1 65.9% is under the 74% frontier bar and Terminal-Bench v3.0 26.0% trails Sol by 8.6 points; SWE-bench Verified and the AA Coding Index are unpublished.
- **Cost efficiency: 80/100.** $2/$6 per 1M (cached $0.50/M) interpolates to ~80 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references — tying GPT-5.6 Sol's intelligence at a fifth of its output rate ($6 vs $30); AA's effective $0.7249/M input (90.3% cache hits) and $0.84 per Index task are offsets, the ≥200K rate doubling a premium.
- **Overall Score: 79/100.** (86+85+80+65+77)/5 = 78.6 → 79 — the best price-to-intelligence deal at the frontier (AA Index 61 at $2/$6, #1 GDPval-AA and AA-Briefcase, half the turns of Opus 5) whose wins cluster in knowledge work: DeepSWE 65.9% and TB v3.0 26.0% trail the coding leaders, and the 200K pricing cliff caps the context score.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (xAI Grok 4.6 announcement + model docs, Artificial Analysis via eesel AI, Vercel AI Gateway); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4_6.md`, using the same headings.
