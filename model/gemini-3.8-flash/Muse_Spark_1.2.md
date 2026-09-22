# Gemini 3.8 Flash — findings by Muse Spark 1.2

- Source: Meta (opencode/muse-spark-1.2-contributor-free)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash
- **Short description:** Google's most intelligent Flash workhorse (2026-09-02), 1M context, improved over 3.7 Flash across software engineering, agentic tasks and multi-step reasoning at Flash speed/cost.
- **Provider / access:** Google AI Studio `google/gemini-3.8-flash`, Vertex AI, and OpenCode Zen `google/gemini-3.8-flash` (Chat Completions via adapter)
- **Release / knowledge:** 2026-09-02; knowledge cutoff 2026-06
- **IDs:** `google/gemini-3.8-flash` (no distinct Free ID; free tier via Google AI Studio rate limits)
- **Context window:** 1,048,576 total (1M in / 65,536 out) — verified via Google blog and LM Market Cap
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes (high reasoning); tool calls yes; JSON mode yes
- **Pricing (as of 2026-09-23):** $0.75 / $3.75 per 1M (introductory until 2026-12-31; then $1.50/$7.50); cached $0.07 / 1M; no Zen $0 free tier beyond Google free trial
- **Architecture:** Proprietary (Gemini 3 series)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (TB 4.0 family not published for 3.8 Flash; AutomationBench proxy ~50% from lineage)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Vals Finance Agent V2: **higher than 3.7 Flash, frontier-level** (Google blog — beats 3.7 and other frontier models; numeric not disclosed)
- Harvey's Legal Agent Benchmark (HLAB): **higher than 3.7 Flash and other frontiers** (Google blog; numeric not disclosed)
- CyberGym (vuln discovery, Cyber variant): **frontier-level** (Google blog, 3.8 Flash Cyber)
- CWE-Bench patching (Cyber): **47.2% pass@1** (Google blog, Cyber variant vs 47.8% leading frontier)
- Wiz pen-test recall (Cyber): **+7.5-9.7% higher recall at 2.3-5.2x lower cost** (Google blog)
- Gray Swan IPI (prompt injection robustness): **significant leap vs 3.7** (Google blog)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found** (HLE-Verified reported)
- HLE-Verified: **54.9%** (Google blog — multi-step STEM/humanities/professional reasoning)
- LCR / MLCR: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** (AA not yet published for 3.8 Flash)
- LiveBench 2026-06-25: **75.8 overall (Gemini 3.8 Flash High)** (livebench.ai: 89.3 reasoning, 72.5 coding, 54.2 math)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench (Vals mirror): **89.48% overall** (Vals LiveCodeBench mirror 2026-09-01 — #3 of 143, behind Fable 5.1 90.52%; Gemini 3.8 Flash High reasoning)
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE v1.1: **outperforms most larger frontier models, only fraction of cost** (Google blog — chart shows 3.8 Flash above most frontiers; numeric not disclosed)
- Terminal-Bench Science 0.1: **no verified public score found**

Long context:

- 1M context window; no MRCR/RULER at 1M published; capable of holding full codebase per Google Antigravity demos

### Normalized scores (1–100)

- **Tool use: 86/100.** Vals Finance/Legal Agent frontier wins + CWE 47.2% patching + Gray Swan robustness; capped by missing TB2.1/Tau3 public numbers.
- **Reasoning: 88/100.** HLE-Verified 54.9% strong + LiveBench 75.8 overall + 1M high-reasoning; capped by no GPQA/HLE raw and no AA Index.
- **Context window: 96/100.** 1,048,576 total; tier 95-100 for ≥1M but capped below 100 without MRCR ≥98% proof at 512K+.
- **Multimodal: 92/100.** Full 5-input omni (text/image/audio/video/PDF in) → text out; audio in qualifies for 90+ tier.
- **Coding: 90/100.** LiveCodeBench 89.48% (#3) + DeepSWE frontier claim + Google's coding emphasis; capped below 94 without SWE-bench Verified.
- **Cost efficiency: 82/100.** $0.75/$3.75 intro is efficient vs $2/6 frontiers but paid (no $0 Zen Free ID); 63% cheaper than 3.1 Pro Preview.
- **Overall Score: 90/100.** Mean of five non-cost dims (86+88+96+92+90)/5=90.4 → 90; best-fit for cost-efficient high-reasoning coding/agent at 1M.

---

## Signature

- Provided by: **Muse Spark 1.2 (opencode/muse-spark-1.2-contributor-free)** — 2026-09-23
- Method: public internet research (Google blog 2026-09-02, Vals LiveCodeBench mirror, LiveBench, LM Market Cap, OrcaRouter); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
