# Ox Alpha — findings by Big Pickle

- Source: Stealth / anonymous provider (`stealth/ox-alpha`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** An anonymous "stealth" reasoning model aimed at coding and sustained agentic work, dropped on OpenRouter on August 20, 2026 at $0/$0 with a full 1M-token window and native video input; tokenizer and video-encoder forensics match Z.ai's GLM-5.x line (~90-99% confidence) though no lab has claimed it.
- **Provider / access:** OpenRouter under `stealth/ox-alpha` (also `opencode/x-preview-f-free` on OpenCode Zen, plus Cline, Nous Research portal+); OpenAI-compatible Chat Completions through AI/ML API and others. Anonymous third-party provider during a ~1-week free preview (Aug 20-27, 2026).
- **Release / knowledge:** Released 2026-08-20 (anonymous preview window), appearing six days after GLM-5.3 shipped; no formal lab attribution or knowledge-cutoff disclosure.
- **IDs:** `stealth/ox-alpha` (proprietary; no open weights)
- **Context window:** 1,048,576 tokens (1M) input; max output 131,072 tokens.
- **Modalities:** text, image, native video input; text output (audio requests rejected).
- **Pricing (as of 2026-09-20):** $0 input / $0 output per 1M tokens during the free preview; no post-preview pricing published. Throughput ~29-39 tokens/s, ~3.15-3.98s P50 latency.
- **Architecture:** Proprietary, undisclosed; mandatory reasoning with configurable effort (`low`/`high`/`max`, default `max`); JSON schema-enforced structured output not supported.

### Raw benchmarks found

Agent / tool use:

- DeepSWE full 113-task runs: ~**58.4%** (66/113, aimlapi.com community run with `pier` 0.3.1) to ~**63%** (two full runs per Gate News) — "roughly level with GPT-5.6-sol mid"; the viral 80% was a 10-task sample by Ben Davis (vs Fable 5 65%, GLM-5.3 62%, Grok 4.6 62%, GPT-5.6-sol 52%).
- Tool calling **supported** (OpenAI schema) with documented multi-step agent work and low retry rates; structured JSON output present but without schema enforcement.

Reasoning / knowledge:

- Kingbench: **87.5%** (70/80), 2nd place behind GLM-5.3 (91.25%) and ahead of e.g. Fable 5 (82.5%) and Opus 4.8 (80%), per Wccftech community leaderboard (Aug 22, 2026).
- GPQA Diamond / HLE / MMLU-Pro: **no verified public score found**.

Coding:

- DeepSWE: full-set runs ~58.4-63%, level with GPT-5.6-sol; no entry on Artificial Analysis or LMSys Arena as of Aug 22, 2026.
- LiveCodeBench release_v6: **28.0%** pass@1 (49/175, greedy, no tools/agent scaffold).
- SlopCodeBench: **17.9%** strict checkpoints (7/39) on cumulative repo-maintenance trajectories.

Long context:

- Full 1M window with 131K output; MRCR-style retrieval: **no verified public score found**. Long-horizon SWE advantage reported qualitatively.

### Normalized scores (1–100)

- **Tool use: 76/100.** (Raised from 68 on 2026-10-08.) Identity confirmed (below) → the full GLM-5.3-Flash agentic suite now applies: Terminal-Bench 2.1 84.3% (AA 84.27%), Toolathlon 78.4%, GDPval-AA v2 1,773 Elo, DeepSWE ~63% (the original full-run figure stands); Terminal-Bench 4.0 32.8% and Agents' Last Exam 26.3% keep it off top-tier.
- **Reasoning: 84/100.** (Raised from 66 on 2026-10-08.) The old "no GPQA/HLE found" gap is closed by the confirmed identity: **GPQA Diamond 91.2% (AA) / 86.4% (Vals)**, HLE w/tools 55.3% (Z.ai) vs AA-HLE 39.9% independent, FrontierMath v2 55.8%, Kingbench 87.5% still stands as the original community result.
- **Context window: 86/100.** (Raised from 82 on 2026-10-08.) Native 1M window with hybrid sparse/linear attention; independent AA-LCR 80.0 and Context Arena 79.5 now fill the old "no verified retrieval score" gap; MRCR still unpublished.
- **Multimodal: 76/100.** (Raised from 64 on 2026-10-08.) Native image/video input confirmed as GLM-5.3-Flash's first multimodal GLM stack — CharXiv 89.4%, MMVU 80.5%, MVbench 77.8%, OfficeQA Pro 62.4%; no audio, text-only output.
- **Coding: 78/100.** (Raised from 71 on 2026-10-08.) **LiveCodeBench (Vals) 80.5%** and **SWE-bench (Vals) 92.0%** close the old gaps; SWE-bench Verified 78.2%, DeepSWE 63.4% (matches the original full-run estimate); AA Coding Index 58.6 keeps it below the frontier tier. The old LCB 28% pass@1 row was a no-scaffold greedy run, not the comparable protocol.
- **Cost efficiency: 75/100.** Unchanged — the stealth endpoint was free only during the Aug 20-27 preview; its OpenRouter page now 404s (delisted after the reveal), no post-preview price was ever published for `stealth/ox-alpha`, and the same weights live on as GLM-5.3-Flash ($0.15/$0.50 list).
- **Overall Score: 80/100.** Mean of the five quality dims (76+84+86+76+78)/5 = 80.0 → 80 (raised from 70). Not an independent model at all — the re-run confirms what the original forensics suspected: this is GLM-5.3-Flash.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 68 | 76 | +8 |
| Reasoning | 66 | 84 | +18 |
| Context window | 82 | 86 | +4 |
| Multimodal | 64 | 76 | +12 |
| Coding | 71 | 78 | +7 |
| Cost efficiency | 75 | 75 | — |
| **Overall** | **70** | **80** | **+10** |

New and corrected data (all found 2026-10-08):

- **Identity solved: Ox Alpha = Z.ai GLM-5.3-Flash.** OpenRouter's model page now discloses: "This stealth model was developed and operated by ZAI, revealed to be ZAI GLM-5.3-Flash." The original tokenizer/encoder forensics (~90-99% confidence, GLM-5.x line) are confirmed — this resolves the report's central unknown.
- **Method:** quality dims realigned to our re-verified `glm-5.3-flash/Big_Pickle.md` (same weights, same re-verification date), which supplies the GPQA/HLE/LiveCodeBench/AA-LCR rows the original report could not find: GPQA Diamond 91.2% (AA) / 86.4% (Vals), HLE 55.3% w/tools (Z.ai) vs 39.9% (AA-HLE), LiveCodeBench (Vals) 80.5%, SWE-bench (Vals) 92.0%, AA-LCR 80.0, CharXiv 89.4%, Terminal-Bench 2.1 84.3% (AA-confirmed), AA Intelligence Index 41.8 (v4.3 re-base).
- Original stand-alone findings confirmed rather than overturned: DeepSWE full-run ~63% (vs the viral 80% sample), Kingbench 87.5% community result, LCB 28% greedy no-scaffold row (protocol caveat, now superseded by the Vals protocol figure).
- **Access status: the OpenRouter `stealth/ox-alpha` page now returns 404** — delisted after the reveal; no post-preview pricing was ever published. The model continues as `glm-5.3-flash` (open weights, MIT).
- Third-party: lmmarketcap scores Ox Alpha's coding composite at 40/100 (#233) — its own ranking predates/does not use the reveal mapping.

Gaps still open after re-run: MRCR (AA-LCR/Context Arena only), τ²-bench, audio modality — all inherited from the GLM-5.3-Flash profile.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (OpenRouter/OpenCode listings, aimlapi.com, gate.com news, mindstudio.ai, local-ai-zone.github.io, syntaxandsignal.tech, capitalandcompute.net); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.