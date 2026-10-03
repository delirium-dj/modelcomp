# GPT 6 Sol — findings by Ling 3.1 Flash

- Source: OpenAI (`openai/gpt-6-sol`; API `gpt-6-sol`, ChatGPT Work, Codex)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 6 Sol
- **Short description:** OpenAI's September-2026 cost-efficiency tier of the GPT-6 line (launched 2026-09-22 with GPT-6 Luna; trained with GPT-6 Astra's methods) — AutomationBench 33.2% (xhigh) beating Claude Opus 5 at max at 9% of its task cost, Agents' Last Exam 56.4% (max), DeepSWE 68.8% (max, within 1.1 points of Fable 5), at $2/$10 per 1M with 90%-off cached reads; superseded within a week by GPT-6.1 Sol.
- **Provider / access:** OpenAI API, ChatGPT Work and Codex (Plus/Pro/Business/Enterprise/Edu; not in Chat); reasoning effort low/medium/high/xhigh/max; Batch/Flex at 50%, Fast at 2×, regional processing +10% (EU data residency available). AA flags it deprecated in favor of GPT-6.1 Sol.
- **Release / knowledge:** 2026-09-22; knowledge cutoff 2026-04-20.
- **IDs:** `openai/gpt-6-sol` / `gpt-6-sol`. NOTE: the repo `meta.json` is a stale stub ("128K total", "Text in/out") — the model has a ~872K–1.05M window, and its OSWorld 2.0 evaluation implies vision input.
- **Context window:** 1,050,000 tokens (OpenAI API docs; apidog reports 872,000); 128,000 max output; prompts above 272K input reprice the WHOLE request to 2× input/cache and 1.5× output ($4/$0.20/$5/$15).
- **Modalities:** text in; text out — vision input implied by the OSWorld 2.0 offline computer-use evaluation (not explicitly confirmed in the materials reviewed).
- **Pricing (as of 2026-10-02):** $2.00/$10.00 per 1M input/output (≤272K); cached input $0.20/M (a 90% discount); cache writes $2.50/M (1.25×); blended (7:2:1) $1.54/M (AA); AA cost per task $0.33 (non-reasoning). 50% below GPT-5.6 Sol's promotional pricing ($4/$20); 60%/67% below its list rates ($5/$30).
- **Architecture:** proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use (OpenAI launch, 2026-09-22; comparisons are vs Claude Opus 5 — Opus 5.5 shipped the same day, so the Opus 5 baseline was superseded within hours):

- AutomationBench 1.0.6 (xhigh): **33.2%** at $0.27/task — vs GPT-6 Astra (low) 30.3% at 3.9× the cost, Claude Fable 5.1 w/ Opus 5 fallback (max) 31.4% at >8.9×, Claude Opus 5 (max) 26.9% at 11.1× — outperforms Opus 5 at max at 9% of its cost per task; exceeds Fable 5.1; bests low-effort Astra
- Agents' Last Exam V1 (max): **56.4%** — above Claude Opus 5's highest score, at 60% lower cost per task
- OSWorld 2.0 offline (xhigh): **60.5%** — similar to Claude Opus 5 at medium (60.3%), at ~80% lower cost per task
- FrontierCode: improves substantially over GPT-5.6 Sol and matches Claude Fable 5.1 (xhigh) at much lower cost (figure not published)
- Terminal-Bench 2.1 / TB-Science / BrowseComp / MCP Atlas / τ-Bench: no verified public score found
- Factuality: ~half the mistakes of GPT-5.6 Sol on OpenAI's internal flagged-conversations eval, approaching Astra-level reliability; alignment evals show lower misleading-claim rates than GPT-5.6 counterparts

Reasoning / knowledge:

- FrontierCode parity with Claude Fable 5.1 (xhigh) — see above
- GPQA Diamond / HLE / AA Intelligence Index: no verified public score found

Coding:

- DeepSWE v1.1 (max): **68.8%** — within 1.1 percentage points of Claude Fable 5's highest score (69.9% at xhigh), at ~80% lower cost per task
- FrontierCode: matches Claude Fable 5.1 (xhigh) — see above
- SWE-bench Verified / SWE-bench Pro / Terminal-Bench 2.1 / SciCode / AA Coding Index: no verified public score found

Long context / multimodal:

- ~872K–1.05M window; no MRCR/RULER/AA-LCR score published
- OSWorld 2.0 offline evaluation implies vision input; no MMMU figure captured

### Normalized scores (1–100)

- **Tool use: 80/100.** AutomationBench 33.2% (xhigh) beats Claude Opus 5 at max (26.9%) at 9% of its task cost, Agents' Last Exam 56.4% (max) tops Opus 5's best, and OSWorld 2.0 60.5% (xhigh) matches Opus 5 at medium; no Terminal-Bench 2.1/Science, BrowseComp or MCP Atlas figures were captured, and the model was superseded by GPT-6.1 Sol within a week.
- **Reasoning: 76/100.** FrontierCode parity with Claude Fable 5.1 (xhigh) and a ~2× factuality improvement over GPT-5.6 Sol support a solid score; no standalone GPQA Diamond, HLE or AA Intelligence Index figure was captured.
- **Context window: 95/100.** ~872K–1.05M-token window with no ≥98%-at-512K+ retrieval figure, so 100 is not justified; the >272K whole-request repricing (2×/1.5×) is a usage caveat.
- **Multimodal: 65/100.** text in with text out — placed in the +image-in band (60–70) because its OSWorld 2.0 computer-use evaluation requires screenshot input (vision not explicitly confirmed in the materials reviewed); no MMMU figure captured.
- **Coding: 78/100.** DeepSWE v1.1 68.8% (max) sits just under the 74% frontier bar (within 1.1 points of Fable 5's 69.9%) and FrontierCode matches Claude Fable 5.1 (xhigh) at much lower cost; SWE-bench Verified, Terminal-Bench 2.1, SciCode and the AA Coding Index are unpublished.
- **Cost efficiency: 78/100.** $2/$10 per 1M (blended $1.54/M at 7:2:1; AA $0.33 per task) interpolates to ~76–78 between the ~88 ($1.25/$4.25) and ~60 ($3/$15) references; 90%-off cached reads ($0.20/M) and half-rate Batch/Flex are offsets; the >272K whole-request repricing ($4/$15) is a premium.
- **Overall Score: 79/100.** (80+76+95+65+78)/5 = 78.8 → 79 — the cost-efficiency tier of the GPT-6 line: best-in-class AutomationBench (33.2% at $0.27/task) and ALE (56.4%) at a fraction of Opus 5's task cost, DeepSWE 68.8% within 1.1 points of Fable 5, ~872K–1.05M context at $2/$10 with 90%-off caching; the missing TB2.1/GPQA/HLE evidence, DeepSWE just under the 74% bar and its week-long shelf life are the caveats.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (OpenAI GPT-6 Sol/Luna launch, OpenAI API docs + pricing, apidog, Artificial Analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6_Sol.md`, using the same headings.
