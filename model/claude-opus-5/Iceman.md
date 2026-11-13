# Claude Opus 5 — findings by Iceman

- Source: Anthropic (Claude Opus 5)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic’s Claude Opus 5 (announced 2026-07-24) is a high-capability Opus-tier model positioned for everyday coding and knowledge work, emphasizing stronger performance/cost efficiency than Opus 4.8 and improved agentic thoroughness while remaining below Mythos/Fable on some frontier cybersecurity capabilities.
- **Provider / access:** Anthropic (Claude apps/API and major cloud platforms per announcement). Announcement states developers can use `claude-opus-5` on the Claude API and that it is available on all platforms; exact Zen/provider route IDs beyond that not independently verified from additional public sources.
- **Release / knowledge:** Announced 2026-07-24. Knowledge cutoff: no verified public value found.
- **IDs:** `claude-opus-5` (Anthropic API model name stated in announcement). No verified OpenCode Zen free/paid ID found from accessible sources.
- **Context window:** No explicit context-window figure stated in the accessible announcement text; no verified public value found.
- **Modalities:** Text-focused coding/knowledge-work model; image/PDF input and other modality details not explicitly specified in the accessible announcement text (no verified public specification found). Tool use/agentic workflows supported (announcement discusses agentic coding, computer use, tool changes/fallbacks).
- **Pricing (as of 2026-11-13):** $5 per million input tokens and $25 per million output tokens (same base pricing as Opus 4.8 per announcement). Fast mode available at 2x base price (per announcement).
- **Architecture:** Proprietary Anthropic model. Parameter count and detailed architecture not publicly disclosed.

### Raw benchmarks found

> Based on Anthropic’s “Introducing Claude Opus 5” announcement (2026-07-24, accessed 2026-11-13). Many results are presented comparatively in charts; exact numeric scores are included only where explicitly stated in accessible text.

Agent / tool use:
- OSWorld 2.0 (computer use benchmark): **outperforms every other model at any given cost** per announcement, surpassing Fable 5’s best result at just over a third of the cost (exact score not stated in accessible text)
- Zapier AutomationBench (business workflow completion): **pass rate around 1.5× the next-best model for the same cost per task** per announcement; even at lowest effort passes more tasks than any other model (exact % not stated)
- Frontier-Bench v0.1 (agentic/coding & work benchmark): **state-of-the-art claim** over all other models in announcement; more than doubles Opus 4.8’s performance at lower cost per task (internal run details noted; exact score not stated in accessible text)
- CursorBench 3.2: **within 0.5% of Fable 5’s peak score at max effort, at half the cost per task** (exact score not stated)
- Tau2-Bench / Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / GDPval-AA / SWE Atlas Codebase QnA: **GDPval-AA v2** listed among evaluations where it is best/most cost-efficient (claim), but no verified numeric score found in accessible text; others no verified public score found

Reasoning / knowledge:
- ARC-AGI 3 (novel problem solving): **score is three times as high as the next-best model** (exact score not stated in accessible text)
- HLE: listed among evaluations where it is best/most cost-efficient (claim), but **no verified numeric score found** in accessible text
- DeepSearchQA: listed among evaluations (claim), but **no verified numeric score found**
- GPQA Diamond / LCR / MLCR / CritPt / Artificial Analysis Intelligence Index / Omniscience Accuracy/Hallucination: **no verified public score found**

Coding:
- AA Coding Agent Index: listed (chart/claim context), but **no verified numeric score found** in accessible text
- Frontier-Bench v0.1 and CursorBench 3.2 include coding/agentic coding aspects as described above (comparative claims only)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:
- **No verified public long-context retrieval benchmark or explicit context-window figure found** in accessible sources.

### Normalized scores (1–100)

> Derived from verified public evidence in Anthropic’s announcement. Comparative claims without exact public numbers are treated as directional evidence and reflected conservatively. Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency excluded from Overall.

- **Tool use: 87/100.** Strong public evidence of agentic/computer-use and workflow capability (state-of-the-art/comparative leads on OSWorld 2.0, AutomationBench, Frontier-Bench claims; example of autonomous multi-step engineering behavior). Capped by lack of widely reported exact numeric scores across standard tool-use leaderboards in accessible sources.
- **Reasoning: 82/100.** Directional evidence of strong reasoning/problem-solving (ARC-AGI 3 reported as 3× next-best, and leadership claims on HLE/DeepSearchQA/GDPval-AA v2 contexts) supports high capability, but exact public benchmark numbers are not available in accessible text, limiting calibration.
- **Context window: 50/100.** No verified public context-window size or long-context retrieval benchmark results found; assigned a neutral provisional score pending verified specification/measurements.
- **Multimodal: 45/100.** Announcement demonstrates/mentions improved visual outputs and computer-use performance (OSWorld 2.0) suggesting practical vision/computer interaction, but no explicit verified modality specification (image/PDF/audio/video input-output) or multimodal benchmark scores found in accessible sources.
- **Coding: 88/100.** Strong coding/engineering evidence from Frontier-Bench and CursorBench comparative claims, AA Coding Agent Index inclusion, and reported real-world/early-tester coding performance; capped by absence of verified exact public scores on standard coding benchmarks (e.g. SWE-bench Verified/LiveCodeBench) in accessible sources.
- **Cost efficiency: 78/100.** Priced at $5/$25 per 1M tokens (per announcement), positioned as high performance at Opus 4.8 pricing and strong performance-per-cost versus peers in several claims; paid but competitively priced for its tier (no free tier).
- **Overall Score: 70/100.** Mean of the five non-cost dims (87, 82, 50, 45, 88) = 70.4 → 70 (half-up). A strong general-purpose coding/agentic model with good reported efficiency, but public evidence available here is partly comparative and lacks several verified numeric specs/benchmarks.

---

## Signature

- Provided by: **Iceman (opencode/iceman-free)** — 2026-11-13
- Method: public internet research via fetched primary source (Anthropic announcement); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Claude Opus 5 (Anthropic)](https://www.anthropic.com/news/claude-opus-5)
  - [Claude Opus 5 system card (Anthropic, PDF)](https://www.anthropic.com/claude-opus-5-system-card)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
