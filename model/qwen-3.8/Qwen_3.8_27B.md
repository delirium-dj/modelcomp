# Qwen 3.8 — findings by Qwen 3.8 27B

- Source: Alibaba Cloud/Qwen3.8-2.4T-A95B (`opencode/qwen-3.8`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (open-weights Qwen3.8-2.4T-A95B)
- **Short description:** Alibaba Cloud's 2.4T-parameter open-weights MoE flagship (the Qwen3.8 line), released weeks after Moonshot's Kimi K3; per the `opencode/qwen-3.8` Zen ID it is served text-only at 128K.
- **Provider / access:** OpenCode Zen `opencode/qwen-3.8`; open weights on Hugging Face `Qwen/Qwen3.8-2.4T-A95B`; cloud sibling `Qwen3.8-Max` on Alibaba Cloud.
- **Release / knowledge:** weights released 2026-08-12 (cloud Max 2026-08-03); knowledge cutoff not disclosed.
- **IDs:** `opencode/qwen-3.8`
- **Context window:** 128K total on the Zen ID (per curated meta); up to ~1M (984K on AA) claimed for the model line — the open release omits some cloud features (image input, non-thinking mode).
- **Modalities:** Text in/out only; thinking mode only (no non-thinking mode in the open release; no image input).
- **Pricing (as of 2026-09-29):** no verified public per-1M price found for the Zen ID; open weights (self-host $0, provider revenue-share license above $50M/12mo); AA cost-per-Index-task $2.16 at 38 tok/s.
- **Architecture:** 2.4T total params, ~95B active (MoE); open weights with commercial license for providers above $50M annual revenue (HF LICENSE).

### Raw benchmarks found

Reasoning / knowledge:

- HLE (text-only subset): **42.4%** (Artificial Analysis HLE leaderboard, 2026-09-22 — rank 8 of 14; ahead of GLM-5.3 42.3, behind Grok 4.6 42.9)
- Artificial Analysis Intelligence Index: **40** (v4.3.2 composite incl. AA-Briefcase, GDPval-AA, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR — AA LLM leaderboard)

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found (only inside the AA Index composite)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval: no verified public score found
- GPQA Diamond: no verified public score found
- LCR / MLCR: not reported as a standalone number

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / Vibe Code Bench: not reported as a standalone number (SciCode is inside the AA Index composite)

Long context:

- MRCR / RULER: no verified public score found

Cost / speed:

- Cost per AA Intelligence Index task: **$2.16**; output speed **38 tok/s**; TTFT **3.01s** (AA leaderboard)

### Normalized scores (1–100)

- **Tool use: 68/100.** AA Index 40 (mid-upper of 250+ tracked models) covers TB 4.0 / GDPval / AutomationBench agentic work; no dedicated TB/Tau/GDPval numbers published for this exact ID, which caps the score below the frontier 88+ TB2.1 cohort.
- **Reasoning: 86/100.** HLE 42.4% is top-8 on the AA board (frontier 40%+ band) and clear of GLM-5.3/Kimi-tier peers; capped because Opus 5.5 (61.4) and GPT-6 Astra (54.7) lead by a wide margin and GPQA/LCR standalines are unverified.
- **Context window: 55/100.** Evaluated Zen ID serves 128K (100K–200K band = 50–64; scored mid-band); native ~1M/984K is claimed for the line but the served window is what the ID delivers.
- **Multimodal: 15/100.** Text-only on this ID — the open release explicitly omits image input; no audio/video.
- **Coding: 66/100.** No verified public SWE-bench/LiveCodeBench/SciCode number found for the 2.4T open release; derived from AA Index 40 composite (includes SciCode) and the family's positioning below Muse Spark 1.3 / GPT-6 in coding-heavy composites; missing SWE data caps it.
- **Cost efficiency: 60/100.** No verified per-1M Zen price found; $2.16 per AA Index task at 38 tok/s is mid-priced; open weights allow $0 self-hosting for under-$50M-revenue users.
- **Overall Score: 58/100.** (68 + 86 + 55 + 15 + 66) / 5 = 58.0 — strong open-weights reasoner; pick for long-horizon agentic text work when cost allows, not for multimodal or ultra-long-context jobs on this ID.

---

## Signature

- Provided by: **Qwen 3.8 27B (openrouter/qwen/qwen3.8-27b:free)** — 2026-09-29
- Method: public internet research (Wikipedia `Qwen` article; Artificial Analysis LLM leaderboard and HLE leaderboard, both 2026-09-22/29 snapshots); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
