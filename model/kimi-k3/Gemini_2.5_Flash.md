# Kimi K3 — findings by Gemini 2.5 Flash

- Source: Moonshot AI (`moonshotai/Kimi-K3`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (includes web/app free-tier access)
- **Short description:** 2.8T-parameter open-weight, natively multimodal agentic model built on Kimi Delta Attention (KDA) and Attention Residuals (AttnRes) by Moonshot AI. Designed for long-horizon coding, deep research, and multimodal knowledge work.
- **Provider / access:** Moonshot AI API (`kimi-k3`), Hugging Face (`moonshotai/Kimi-K3`), OpenCode Zen (`opencode/kimi-k3`). API supports OpenAI-compatible Chat Completions.
- **Release / knowledge:** 2026-07-16 (Release); Cutoff ~2026-03.
- **IDs:** `moonshot/kimi-k3`, `opencode/kimi-k3`
- **Context window:** 1,048,576 tokens total (1M tokens). Verified via official model card & BrowseComp 1M evaluation.
- **Modalities:** Text, Image, Video, and PDF/Document input; Text output; Native reasoning (`reasoning_content`) enabled; Tool calling supported; JSON mode supported.
- **Pricing (as of 2026-10-01):** $3.00 / 1M input tokens, $15.00 / 1M output tokens, $0.30 / 1M cached input tokens; Free access tier available on Kimi web/app platforms.
- **Architecture:** 2.8T parameters total / 104B active parameters; MoE architecture with 896 total experts (16 active per token + 2 shared); Open weights released under the Kimi K3 License.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found** (Vendor/Moonshot-reported 84.5% vs Sol near tie; no independent harness score reported)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** (AA-Briefcase: **1548**)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (AutomationBench-AA: **52.7%**, Vendor Automation Bench: **30.8%**)

Reasoning / knowledge:

- GPQA Diamond: **77.9%** (Artificial Analysis independent / text-only)
- HLE: **44.4%** (Artificial Analysis independent / text-only)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **57.1 / #4** (Artificial Analysis Intelligence Index v4.1, 189 models)
- Omniscience Accuracy / Hallucination Rate: **46.0% / 51.0%** (AA-Omniscience / Kili Technology analysis)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found** (Vendor SWE Marathon / Program Bench reported; MindStudio hands-on real-world task evaluation 60-64/70)
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found** (AA Coding Index lead among compared tier)

Long context:

- MRCR / RULER / GraphWalks: **no long-context retrieval reported** (BrowseComp vendor score: 91.2% / 90.4% at 1M tokens without context management)

### Normalized scores (1-100)

- **Tool use: 82/100.** High agentic capabilities anchored by Artificial Analysis AutomationBench-AA (52.7) and AA-Briefcase (1548), though capped due to lack of verified public Terminal-Bench 2.1 / Tau3 harness scores.
- **Reasoning: 88/100.** Strongly backed by AA Intelligence Index score of 57.1 (#4 overall), GPQA Diamond at 77.9%, and HLE at 44.4%, capped slightly by a high hallucination rate (51%) on unconstrained omniscience checks.
- **Context window: 95/100.** Total verified context window is 1,048,576 tokens (>=1M tier mapping).
- **Multimodal: 85/100.** Supports native input for text, images, video, and documents/PDFs with output restricted to text.
- **Coding: 82/100.** Strong performance in real-world task tests and leading position in AA Coding Index, but capped due to absence of standardized public SWE-bench Verified / LiveCodeBench score reports.
- **Cost efficiency: 60/100.** Priced at $3.00/1M input and $15.00/1M output tokens, mapping directly to the $3/$15 cost efficiency tier (~60).
- **Overall Score: 86.4/100.** Best-fit for large-scale long-context research, agentic document workflows, and high-volume coding implementations where open weights and cost-efficiency balance frontier reasoning.

---

## Signature

- Provided by: **Gemini (google/gemini-2.5-flash)** — 2026-10-01
- Method: Public internet search across vendor documentation (Moonshot AI / Hugging Face) and independent benchmarks (Artificial Analysis, Kili Technology, MindStudio); scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
