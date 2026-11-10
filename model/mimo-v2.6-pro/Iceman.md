# MiMo V2.6 Pro — findings by Iceman

- Source: Xiaomi/MiMo V2.6 Pro
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.6 Pro
- **Short description:** Xiaomi’s MiMo-V2.6-Pro is a flagship omni-modal reasoning model with a 1M-token context window, positioned for complex projects, long-horizon tasks, high-stakes work, coding/agent workflows, and multimodal understanding.
- **Provider / access:** Xiaomi MiMo API/platform (`mimo-v2.6-pro`) via `https://api.xiaomimimo.com/v1` (per official model page). Local metadata lists `xiaomi/mimo-v2.6-pro` and `noFreeId`.
- **Release / knowledge:** Release date and knowledge cutoff not clearly extracted from the reviewed model page in this pass.
- **IDs:** `mimo-v2.6-pro`.
- **Context window:** 1M tokens context; 128K max output (Xiaomi MiMo model page). Local metadata states 1M / 128K out.
- **Modalities:** Input modalities text, image, video, audio; output text (Xiaomi MiMo model page).
- **Pricing (as of 2026-11-10):** USD pricing listed as $0.0036 / 1M input (cache hit), $0.435 / 1M input (cache miss), $0.87 / 1M output (Xiaomi MiMo model page). Local metadata notes paid pricing and cached input rate.
- **Architecture:** Xiaomi describes it as a trillion-parameter model in product messaging; detailed public architecture/active-parameter breakdown not fully specified on the reviewed page.

### Raw benchmarks found

> Verified figures below are from Xiaomi’s official MiMo-V2.6-Pro model page. The page includes benchmark claims and a benchmark image; only clearly stated numeric values in accessible text are cited.

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (clearly extracted from reviewed page text in this pass; local metadata references 89.9% but not independently verified from this page)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis composite intelligence index: **46.32** (Xiaomi MiMo-V2.6-Pro page states “46.32 on Artificial Analysis' composite intelligence index…”).
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- 1M-token context window / 128K max output documented; no standalone long-context retrieval benchmark score extracted.

Multimodal:

- Native omni-modal input understanding claimed (text/image/video/audio) on official page; no specific multimodal benchmark numbers clearly extracted in this pass.

### Normalized scores (1–100)

> Derived from limited but verified evidence above using `model-comparison.md` methodology. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5` (Cost excluded). Evidence breadth is limited; scores are conservative.

- **Tool use: 80/100.** Official positioning emphasizes agents/complex tasks and tool-calling capability, but I could not extract clear public tool-benchmark numbers from reviewed text in this pass.
- **Reasoning: 84/100.** Verified Artificial Analysis composite intelligence index 46.32 indicates strong general capability for an open-source-positioned model; capped by lack of canonical reasoning benchmark breakdowns (GPQA/HLE/ARC/AA sub-scores) in extracted text.
- **Context window: 95/100.** Verified 1M-token context and 128K output are strong for long-horizon workflows; capped by absence of long-context retrieval stress scores.
- **Multimodal: 88/100.** Verified omni-modal inputs (text/image/video/audio) with text output provide broad multimodal understanding; capped by no extracted multimodal benchmark scores and text-only output.
- **Coding: 82/100.** Marketed for coding and complex work, but I could not clearly extract verified coding benchmark numbers from the reviewed page text in this pass (benchmark image not parsed).
- **Cost efficiency: 95/100.** Very low listed pricing ($0.435/$0.87, $0.0036 cached input) offers excellent value if capability meets task needs.
- **Overall Score: 86/100.** Mean of the five non-cost dims (80, 84, 95, 88, 82) = 85.8 → 86 (half-up). Conservative score reflecting strong context/multimodal breadth and pricing with limited clearly extracted public benchmark detail.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-10
- Method: Independent public research using alternative web access (`webfetch`) to Xiaomi’s official model page; scores are normalized 1–100 interpretations from verified text claims, not official vendor scores.
- Reference URLs:
  - [MiMo-V2.6-Pro (Xiaomi MiMo model page)](https://mimo.mi.com/models/en-US/mimo-v2.6-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
