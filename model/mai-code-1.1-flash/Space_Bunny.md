# MAI-Code-1.1-Flash — findings by Space Bunny

- Source: Microsoft AI (`MAI-Code-1.1-Flash`, served as `github-copilot`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MAI-Code-1.1-Flash
- **Short description:** Microsoft AI's in-house **coding specialist**, released **2026-08-11** as an update to MAI-Code-1-Flash (June 2026). Explicitly "built for developers, not benchmarks" — trained directly with the **GitHub Copilot production harnesses** using hundreds of thousands of RL environments. Top use case: high-volume, low-latency agentic coding inside GitHub Copilot, VS Code and other Copilot surfaces. New in 1.1: **image input** (screenshots → prototypes), quarter the cost of its predecessor, 25% fewer tokens per task, 25% faster token streaming. It is a coding specialist, **not** a general frontier model.
- **Provider / access:** **GitHub Copilot** (model picker in VS Code, Visual Studio, JetBrains, GitHub; administrators must enable the MAI-Code policy for Copilot Enterprise/Business) and **Microsoft Foundry / Azure AI** (`ai.azure.com/catalog/models/MAI-Code-1.1-Flash`, version 2026-09-15, "Direct from Azure"). OpenAI-compatible endpoints on Foundry. **Not available as a standalone pay-per-token API elsewhere** — no OpenCode Zen ID, no DeepInfra/Together/OpenRouter listing.
- **Release / knowledge:** Released **2026-08-11**. Foundry version dated 2026-09-15. **Knowledge cutoff: not disclosed.**
- **IDs:** `MAI-Code-1.1-Flash` (Foundry / Copilot policy name), `github-copilot` (llm-stats provider route)
- **Context window:** **256,000 tokens input.** Max output: not specified by any source.
- **Modalities:** **Text-to-text and image-to-text** coding model (Foundry catalog). New in 1.1-Flash: it "takes image inputs and reasons over image contents" — screenshots, diagrams and designs to prototype. Reasoning: **adaptive solution-length control** — stays concise on simple requests, spends more reasoning budget on complex repository changes. Tool calls / function calling: yes (trained with the Copilot harness). Instruction following: stated strength across single-turn and multi-turn.
- **Pricing (as of 2026-10-09):** **$0.20 in / $1.20 out per 1M**, input with cache **$0.02** — via the `github-copilot` route. That is **a quarter of MAI-Code-1-Flash's cost**. Paid only; no Free tier. Copilot subscription seats are a separate commercial arrangement.
- **Architecture:** proprietary closed weights. **138B parameters** (llm-stats); MoE active-parameter count is **not disclosed** by Microsoft, so no total/active split is claimed here.

### Raw benchmarks found

> **Evidence-quality warning:** only **two** independently published benchmark numbers exist for the 1.1-Flash checkpoint (SWE-bench Verified and Terminal-Bench 2.1). Everything else below is either a Microsoft relative-improvement claim or a measurement of the **predecessor** MAI-Code-1-Flash, labeled as such and never merged into 1.1's scores.

Coding:

- SWE-bench Verified: **72.6%** (llm-stats, the widest-published figure) — vs MAI-Code-1-Flash 71.6%, Claude Haiku 4.5 69.8%, GPT-5.4 mini 69.2%, Qwen3.8 Max not published
- Terminal-Bench 2.1: **62.9%** (llm-stats) — vs MAI-Code-1-Flash 51.7%, GPT-5.4 mini 60.7%, Claude Haiku 4.5 49.4%; **beaten decisively by DeepSeek-V4-Flash-0731 at 82.7%** and Qwen3.8 Max at 86.6%
- Terminal-Bench 2.1 **inside GitHub Copilot CLI**: **+22%** relative improvement over MAI-Code-1-Flash (Microsoft's own claim; harness-specific and not convertible to an absolute score)
- .NET tasks in Copilot: **+15%** relative improvement over the predecessor (Microsoft claim, no absolute number)
- Code survival through commit: **+4%** over the predecessor (Microsoft claim)
- Token efficiency: **25% fewer tokens** and **25% faster streaming** vs the predecessor (Microsoft claim); the predecessor's adaptive-length control was already claimed at "up to 60% fewer tokens" on harder problems
- Predecessor MAI-Code-1-Flash (2026-06-02, for trajectory reference only): SWE-bench Verified 71.6%, **SWE-bench Pro 51.2%** (13th pct of 49; field leader Fable 5.1 at 81.2, a −30 pt gap), **SWE-bench Multilingual 65.5%** (13th pct of 46; leader Opus 5 at 89.5), Terminal-Bench 2.0 54.8% (72nd pct), **ArtifactsBench 36.4%** (the multimodal code-generation eval; field leader), **IFBench 75.0%**, ECI 138.56 (#42 of 398)
- SWE-bench Pro, SWE-bench Multilingual, ArtifactsBench, LiveCodeBench, SciCode, DeepSWE, Vibe Code Bench: **no verified public score found for the 1.1-Flash checkpoint itself**

Agent / tool use:

- Terminal-Bench 2.1: **62.9%** (see above — this is the only published agentic-terminal number)
- Terminal-Bench 2.0: no score found for 1.1-Flash (predecessor: 54.8%)
- Tau3-Banking / Tau2-Bench, GDPval-AA, OSWorld, AutomationBench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Tool calling is a stated capability (Copilot harness-trained) but has no published tool-use benchmark

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE / HLE w/ tools: **no verified public score found**
- AA-LCR / LongBench v2 / MRCR: **no verified public score found**
- CritPt / Omniscience: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**
- IFBench 75.0% (100th percentile of a 1-model field) is published for the **predecessor** only
- llm-stats composite indexes for MAI-Code-1.1-Flash (based on only 2 evals — treat as very low-confidence): LLM Stats Score **27.8** (#144), Reasoning **27.5** (#140), Coding **18.8** (#115), Agents **10.7** (#119)
- Microsoft states "competitive reasoning across math, science, and visual coding tasks" on the Foundry catalog — a claim with **no accompanying numbers**

Multimodal:

- Image input is new in 1.1-Flash ("screenshots to prototypes") and confirmed as image-to-text by the Foundry catalog; llm-stats lists Multimodal: **Yes**
- **No verified public multimodal benchmark score exists** for the 1.1-Flash checkpoint. The predecessor's ArtifactsBench 36.4% (rendered-artifact generation from code, MLLM-judged, 1,825 tasks) is the only relevant datapoint in the family, and it is not the same model.

Long context:

- 256K input context verified on llm-stats and benchlm. **No long-context retrieval benchmark (MRCR, RULER, LongBench, AA-LCR) exists** for this model at all.

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench 2.1 at 62.9% is a real mid-tier terminal-agent number, and the +22% relative gain inside the actual Copilot CLI harness plus tool-calling trained on the production harness is meaningful evidence of production agentic quality. Capped hard by the total absence of Tau3, GDPval-AA, OSWorld, AutomationBench and any Claw/Toolathlon/MCP-Atlas figure — there is no published evidence at all for research, office or MCP-style agentic work.
- **Reasoning: 55/100.** This is the model's weakest documented dimension and the score carries the heaviest caveat in this report: **zero published GPQA Diamond, HLE, LCR, CritPt or AA Index numbers.** The only supporting evidence is Microsoft's unquantified "competitive reasoning" claim, the predecessor's IFBench 75.0%, and llm-stats' very-low-confidence Reasoning index of 27.5 from just 2 evals. Scored provisionally on a coding-specialist's expected reasoning profile rather than on measurement.
- **Context window: 80/100.** **256,000 tokens** verified — upper-mid tier and generous for repository work. Held to 80 rather than higher because *zero* retrieval benchmarks exist: no MRCR, RULER, LongBench v2 or AA-LCR, so effective long-context quality is entirely unmeasured.
- **Multimodal: 65/100.** Confirmed **image-in, text-out** with a stated screenshot-to-prototype capability and explicit image-reasoning support — solid in the "+image in = 60–70" band. Not higher because there is **no published multimodal benchmark** for this checkpoint, no video or audio path, and text-only output.
- **Coding: 72/100.** SWE-bench Verified 72.6% and Terminal-Bench 2.1 62.9% put it in the Claude Haiku 4.5 / GPT-5.4 mini tier — respectable, and genuinely competitive *within that price class*. But it is well behind DeepSeek-V4-Flash-0731 (TB2.1 82.7%), GLM-5.3-Flash (TB2.1 84.3%) and Qwen3.8 Max (86.6%) on the same benchmark while costing more than several of them, and the predecessor's SWE-bench Pro 51.2% and ArtifactsBench 36.4% suggest headroom on hard and multimodal code tasks.
- **Cost efficiency: 92/100.** **$0.20 in / $1.20 out with $0.02 cached reads**, at a quarter of its predecessor's price, lands right around the ~$0.60/$2.20 reference point. Microsoft's own headline claims — 25% fewer tokens per task, 25% faster streaming, and "solves harder problems with up to 60% fewer tokens" — mean the effective per-task cost is likely better than the tariff suggests. No Free tier and no standalone pay-per-token API outside Copilot/Foundry keep it out of the 95+ band.
- **Overall Score: 69/100.** Best fit: **inside GitHub Copilot and Microsoft Foundry**, for everyday agentic coding in real repositories — feature work, refactoring, repo Q&A, .NET tasks and screenshot-to-prototype — where 62.9% Terminal-Bench 2.1 at ~$0.20/$1.20 with 25% fewer tokens is a genuinely good deal. Do not pick it for frontier reasoning, research, multimodal analysis or hard autonomous coding; those need a frontier or open model that publishes more than two benchmark numbers.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-09
- Method: public internet research across Microsoft's own AI news post (2026-08-11), the `microsoft/MAI-Code` GitHub repository README, the Microsoft Foundry / Azure AI model catalog entry (capabilities, version 2026-09-15), llm-stats.com comparison pages (SWE-bench Verified, Terminal-Bench 2.1, pricing, context, parameter count), benchlm.ai's MAI-Code-1.1-Flash comparison tables, BenchmarkList's profile of the predecessor MAI-Code-1-Flash, and The Decoder's independent critical coverage. Strictly separated the two published 1.1-Flash numbers from the predecessor's seven and from Microsoft's unquantified relative-improvement claims; no predecessor or vendor-relative figure was folded into a 1.1-Flash score. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MAI_Code_1.2.md`, using the same headings — re-scoring is warranted the moment Microsoft publishes SWE-bench Pro, GPQA, HLE or any multimodal number for a 1.1+ checkpoint, since this report's reasoning score in particular rests on almost no measurement.