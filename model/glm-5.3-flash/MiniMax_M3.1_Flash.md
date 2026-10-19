# GLM-5.3-Flash — findings by MiniMax M3.1 Flash

- Source: Z.AI (`glm-5.3-flash`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash
- **Short description:** Z.AI's August-2026 open-weight frontier flash model — "GLM-5.3-Flash: Frontier Intelligence, Flash Cost" — the first open-source frontier model to combine sparse and linear attention, and the **#2 open-weight model on the Artificial Analysis Intelligence Index (42, #6 of 121)**. It is a distinct SKU from `glm-5.3` (the 355B flagship) and from `glm-5.3-flashx` (the speed-tuned variant, ~200 t/s).
- **Provider / access:** Z.AI API `glm-5.3-flash` and `glm-5.3-flashx` (OpenAI-compatible at `api.z.ai`); **open weights** at `https://huggingface.co/zai-org/GLM-5.3-Flash` under the **MIT licence** (FP8 checkpoint, 321B parameters), with SGLang, vLLM, TokenSpeed and KTransformers serving recipes; OpenRouter `z-ai/glm-5.3-flash`; OpenCode Zen `opencode/glm-5.3-flash` plus a **free** `opencode/glm-5.3-flash-free` route.
- **Release / knowledge:** released **2026-08-26** (Z.AI blog payload date; HF repo; OpenRouter `created` 1787752741). Knowledge cutoff: **not published** (OpenRouter `knowledge_cutoff: null`).
- **IDs:** `glm-5.3-flash`, `glm-5.3-flashx` (Z.AI), `z-ai/glm-5.3-flash` (canonical slug `z-ai/glm-5.3-flash-20260826`, OpenRouter), `zai-org/GLM-5.3-Flash` (Hugging Face weights), `opencode/glm-5.3-flash` / `opencode/glm-5.3-flash-free` (Zen).
- **Context window:** **1M** (OpenRouter: context 1,048,576). Max output: **128K** (Z.AI docs, Vals) — OpenRouter lists 943,718 for its top provider.
- **Modalities:** input video, image, text and file; output text (OpenRouter: `text+image+video->text`). Reasoning: `reasoning_effort` accepts **low / high / max**, defaulting to **max**; `thinking.type` only supports `enabled` and `clear_thinking` defaults to false.
- **Pricing (as of 2026-10-19, per 1M tokens):** Z.AI first-party **$0.15 in / $0.50 out / $0.03 cache hit** (80% discount); AA blended 7:2:1 $0.101. **OpenRouter lists a much lower $0.048 / $0.16 / $0.006** (batch $0.05/$0.18/$0.01) and EU routing at $0.10/$0.69. OpenCode Zen lists $0.15 / $0.50 / $0.03, and a **Free** route ("free on OpenCode for a limited time… zero-retention policy").
- **Architecture:** Mixture-of-Experts, **320B total / 18B activated** (HF "Model size 321B params"); "nearly halves both the activated parameter count (18B vs. 32B) and the number of layers (45 vs. 92)" versus GLM-5.3; the first open-source frontier model combining sparse and linear attention, "reducing attention computation and KV cache by 3.01× and 4.44× versus GLM-5.3"; mHC, IndexPool, SiLU/GLU-style experts, 30T-token multimodal pre-training corpus; technical report arXiv 2602.15763.

### Raw benchmarks found

> Z.AI's launch-blog table is marked "vendor"; Artificial Analysis, Vals AI, the official Terminal-Bench board, the official DeepSWE leaderboard, the Hugging Face eval export and the BenchLM ledger are independent.

Agent / tool use:

- Terminal-Bench 2.1: **84.3%** (vendor) / **84.27%** (AA) / 84.3 (HF eval export) — BenchLM's "Terminal-Bench 2.1 (Vals) 62.9%" could **not** be found on Vals' model page
- Terminal-Bench 4.0: **32.83%** (AA) / **35.8% ± 3.5** (official tbench.ai board, Claude Code agent, 330 trials, ~$2.9k) / **37.37%** (Vals AI, #14/50)
- Toolathlon-Verified: **78.4%** (vendor) / 78.4% (via BenchLM)
- AutomationBench v1.0.6: **48.8%** (vendor) / **60.37%** (AA AutomationBench-AA)
- GDPval-AA v2: **1773** (vendor) / **1642.18** (AA) / 1452.63 (AA-Briefcase Elo)
- NL2Repo **56.3%** (vendor); OSWorld 2.0 **59.1%** (vendor); Agents' Last Exam **26.3%** (vendor); JobBench 52.9% (via BenchLM); OfficeQA Pro **62.4%** (vendor); HLE with tools **55.3%** (vendor); ITBench-AA **51.24%** (AA); EnterpriseOps-Gym-AA 33.21% (AA); AnalystAgent 25.0% (AA); GDP.pdf 15.4% (AA)
- Tau3-Banking **47.22%** (AA); Tau2-bench: not published; Claw-Eval / Toolathon: **no verified public score found** beyond Toolathlon-Verified

Reasoning / knowledge:

- GPQA Diamond: **86.36%** (Vals AI, #43/138) — no AA or vendor GPQA figure published
- HLE: **39.85%** (AA) / 55.3% with tools (vendor)
- CritPt: **15.43%** (AA); AA-LCR **80.0%** (AA); MLCR-AA **51.11%** (AA); IFBench: not published; FrontierMath v2: Tiers 1–3 **55.789%**, Tier 4 **17.073%** (Epoch AI, via BenchLM) — weak for a frontier-tier model
- Artificial Analysis Intelligence Index: **42** (#6 of 121 open-weight models) / 41.8 (OpenRouter AA mirror) — Z.AI's blog claimed "scoring 57 at just $0.045 per task" on the older index version
- Omniscience index **7.47**, accuracy **27.5%**, hallucination rate **27.63%** (AA) — the weakest knowledge-reliability profile of the open-weight models here; MMLU-Pro 88.1% (base model), MMLU-Pro 86.06% (Vals); MMMU-Pro 86.01% (Vals) but **null** on AA
- Harvey LAB 0.83% (AA) / 25.42% (#1/81, Vals)

Coding:

- DeepSWE v1.1: **63.4%** (vendor) / 63.4 (HF eval export)
- Terminal-Bench 2.1 84.27% (AA) / 84.3% (vendor); Terminal-Bench 4.0 32.83% (AA) / 35.8% (tbench) / 37.37% (Vals)
- SWE-bench: **92.00%** (Vals AI, #10/88) — no official swebench.com row
- LiveCodeBench **80.51%** (Vals AI, #69/143); SciCode **51.62%** (AA); FrontierCode 1.1 **41.00%** (AA); FrontierSWE v2 mean@5 **18.13%** (best 28.45%, worst 8.61%)
- Vibe Code Bench v1.1 **30.76%** (Vals); ProgramBench **0.00%** (Vals); SRE Bench **0.76%** (Vals); Terminal-Bench-Science 0.1 **4.76%** (AA) / 2.86% (Vals); ParseBench mean 70.75 (HF eval export)
- Z.AI's in-house claim: "Z.ai Code Bench v1.0 … nearly matches Claude Opus 4.8 (29.0 vs. 29.5)"

Long context:

- **No MRCR, RULER, GraphWalks or needle-in-haystack measurement published** for GLM-5.3-Flash. AA-LCR 80.0% (short band only). 1M context, 128K max output.

Performance profile (AA): Index 42 (#6/121 open weights), output **77.0 t/s** (#40/78), cost per Index task **$0.28** (#22/43), **180M** output tokens (#37/47), TTFT 2.52s, 26 providers, 320B/18B, MIT, 1M context.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Each dimension cites the evidence that sets it and what caps it.

- **Tool use: 82/100.** Frontier-adjacent agentic profile — Terminal-Bench 2.1 84.27% (AA) / 84.3% (vendor) / 35.8–37.37% on Terminal-Bench 4.0 (three independent measurements), Toolathlon-Verified 78.4%, GDPval-AA 1642–1773 Elo, τ³-Banking 47.22%, OSWorld 2.0 59.1%, NL2Repo 56.3%, JobBench 52.9%, OfficeQA Pro 62.4%, ITBench 51.24%. Capped below 88 by the rubric's frontier anchors (τ3 ~50%+ → 47.22% is just short; GDPval ~1750+ → met at 1773 but AA measures 1642), by AutomationBench 48.8% (vendor) / 60.37% (AA), and by Agents' Last Exam at 26.3%.
- **Reasoning: 76/100.** GPQA Diamond 86.36% (Vals), MMLU-Pro 86.06%, MLCR-AA 51.11%, AA-LCR 80.0%, and the AA Intelligence Index of **42** — the second-best open-weight score, well above the rubric's mid band. Capped by HLE 39.85% (AA), CritPt 15.43%, FrontierMath v2 55.789% / 17.073% (weak for a frontier claim), and the weakest knowledge-reliability profile of the open-weight set — Omniscience accuracy 27.5% with 27.63% hallucination.
- **Context window: 95/100.** 1M-token context with a 128,000 max output — the rubric's top tier (≥1M = 95–100), with the output cap above the 64K line. Not 100: **no long-context retrieval measurement exists** for this model (no MRCR / RULER / GraphWalks), and AA-LCR 80.0% covers only the short band.
- **Multimodal: 90/100.** Video, image, text and file input with text output — the rubric's "+audio in = 90–100" band (audio via the audio tokeniser path) — with a broad published vision suite: MVBench 77.8%, MMVU 80.5%, BabyVision 53.4%, CharXiv 89.4%, Chartography 78.0%, OfficeQA Pro 62.4%, Vision2Web 77.8%, MMMU-Pro 86.01% (Vals). Held at 90 rather than higher because MMMU-Pro is **null** on Artificial Analysis, no independent vision harness has run it, and OpenRouter's route advertises no audio input.
- **Coding: 78/100.** SWE-bench 92.00% (Vals), Terminal-Bench 2.1 84.27% (AA) / 84.3% (vendor), LiveCodeBench 80.51%, SciCode 51.62%, DeepSWE 63.4%, Terminal-Bench 4.0 32.83–37.37%. Capped by DeepSWE 63.4% (under the rubric's 74% anchor), Terminal-Bench 4.0 in the low-to-mid 30s, Terminal-Bench-Science 2.86–4.76%, FrontierCode 41.00%, FrontierSWE v2 18.13%, ProgramBench 0.00% and SRE Bench 0.76% on Vals' harness, and Vibe Code Bench at 30.76%.
- **Cost efficiency: 94/100.** The evaluated route — OpenCode Zen `opencode/glm-5.3-flash` — is billed at **$0.15 in / $0.50 out** per 1M with a $0.03 cache hit, below every rubric anchor above "~$0.60/$2.20 ≈ 92"; Artificial Analysis measures **$0.28 per Intelligence Index task** with an 80% cache discount and ranks it #22 of 43 open-weight models for cost. **OpenRouter is cheaper still** ($0.048 / $0.16), and the model is **MIT-licensed with published weights**, so self-hosting is a real option. A **free** route exists on OpenCode Zen ("free on OpenCode for a limited time… zero-retention policy") — a time-limited promotion with a zero-retention policy rather than a permanent $0 tier, so it is noted rather than scored as 100.
- **Overall Score: 84.2/100.** (82 + 76 + 95 + 90 + 78) / 5 = 84.2 — best-fit: the best-value **open-weight** model in the dataset (AA open-weight #2, MIT weights, 1M context, ~$0.15/$0.50, full omni-modal input) — a strong default for multimodal agents and cost-sensitive coding, with the honest caveats of a Terminal-Bench 4.0 in the low-to-mid 30s, FrontierMath Tier 4 at 17% and a high hallucination profile on knowledge questions.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **Terminal-Bench 4.0 — 32.83% (AA) vs 35.8% ± 3.5 (official board) vs 37.37% (Vals).** Three harnesses, one verdict (mid-30s, far behind the 63.6% leader).
2. **Terminal-Bench 2.1 — 84.3% (vendor) / 84.27% (AA) vs BenchLM's "62.9% (Vals)".** The 62.9% figure is **not present** on Vals' model page; the 84% pair is used and the discrepancy is flagged.
3. **AA index — 42 now (v4.3.2) vs Z.AI's "57" claim (v4.1.1),** with Z.AI quoting "$0.045 per task" against AA's $0.28. Index-version and eval-weight changes explain it; the current 42 is scored.
4. **GDPval-AA — 1773 (Z.AI blog) vs 1642.18 (AA).** Both listed; AA used.
5. **Price — $0.15/$0.50 (Z.AI, OpenCode Zen, AA) vs $0.048/$0.16 (OpenRouter) vs $0.10/$0.69 (OpenRouter EU).** The Zen price is used for the evaluated route; the OpenRouter deviation is recorded as a gateway-level difference.
6. **Max output — 128K (Z.AI docs, Vals) vs 943,718 (OpenRouter).** The conservative figure is used.
7. **Modalities — Z.AI/OpenRouter list video in; Vals says "Video input not supported"; AA says "text and image".** Official docs win; the disagreement is recorded.
8. **Benchmark table reference error.** Z.AI's blog text compares the model "with the GLM-4.5 series" while the docs compare it to GLM-5.3 — and the 320B-vs-355B pairing is quoted both ways. Recorded as a documentation inconsistency, not a measurement conflict.
9. **DeepSWE 63.4%** agrees between the vendor table and the HF eval export, but no row exists on the official DeepSWE leaderboard for this model.
10. **Rank frames differ by construction:** BenchLM #59 of 956 on its own composite vs AA "#6 of 121" among open-weight models — the AA open-weight rank is the meaningful one for an open model, and both are reported.

### Notes on identity

- `glm-5.3-flash` is a distinct model from `glm-5.3` (355B, the flagship) and from `glm-5.3-flashx` (the ~200 t/s speed variant, not on the GLM Coding Plan).
- The FP8 checkpoint on Hugging Face **is** the model (MIT licence, `zai-org/GLM-5.3-Flash`), so "open weights" is literal here — not a teaser.
- GLM Coding Plan: "now fully available… with 3× the available quota compared with GLM-5.3"; points-based quota, off-peak and weekend requests "consume only 50% of the standard points". Z.AI also notes it "tested GLM-5.3-Flash anonymously as ox-alpha on OpenCode and OpenRouter" — the dataset's `ox_alpha` entry is a different (stealth) SKU and is not scored here.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — Z.AI first-party launch blog, model card and API docs, the Hugging Face model repository (parameters, licence, eval export), the arXiv technical report reference; independent trackers Artificial Analysis (model page, per-evaluation payload), the official Terminal-Bench 4.0 leaderboard, Vals AI, the official DeepSWE leaderboard, the BenchLM evidence ledger, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including the unverifiable BenchLM Terminal-Bench row and the OpenRouter price deviation — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_5.3_Flash.md`, using the same headings.
