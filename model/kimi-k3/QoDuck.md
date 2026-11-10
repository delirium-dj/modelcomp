# Kimi K3 — findings by QoDuck

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's open-weight, natively multimodal agentic flagship (Jul 2026), a 2.8T-parameter sparse MoE (104B active) built on Kimi Delta Attention. Reached #3 on the Artificial Analysis Intelligence Index at launch (comparable to Opus 4.8 / GPT-5.5); strong agentic coding, browsing and native video understanding. Predecessor to Kimi K3.1 Pro.
- **Provider / access:** First-party Moonshot `kimi-k3` at `https://api.moonshot.ai/v1` / platform.kimi.ai (OpenAI- and Anthropic-compatible Chat Completions). Open weights on Hugging Face `moonshotai/Kimi-K3` and GitHub `MoonshotAI/Kimi-K3`. Also on Morph `morph-kimik3` and OpenRouter.
- **Release / knowledge:** Hosted API/app launch 2026-07-16; full open weights released by 2026-07-27. Knowledge cutoff not stated on the official sources (treat as provisional, not verified).
- **IDs:** `moonshotai/Kimi-K3` (HF/GitHub), `kimi-k3` (Moonshot API), `morph-kimik3` (Morph). No separate Free ID — open weights free to download (custom license), hosted inference paid.
- **Context window:** 1,048,576 tokens (1M), verified from the official GitHub README and blog. Max output 131,072 default / up to 1,048,576 (morphllm; not stated on the official README).
- **Modalities:** Text + image + **native video** in → text out. Official blog: "understands text, images, and video within the same model"; GitHub benchmark table includes Video-MME 90.0 / MMVU 82.1; morphllm confirms "Video: yes (native)". Audio input NOT supported. MoonViT-V2 vision encoder (401M). Reasoning: always on (`reasoning_effort` low/high/max, default max). Tool calls: yes (native agentic). JSON mode: via OpenAI-compatible API.
- **Pricing (as of 2026-11-10, first-party):** $3.00 in / $15.00 out / $0.30 cached input per 1M (90% cache discount), flat at any context length (official blog + AA + morphllm). Morph resells at $2.50 in / $14.00 out / $0.29 cached. Open weights free to self-host (compute only). K3.1 Pro later cut first-party pricing to $2/$10.
- **Architecture:** 2.8T total / 104B active MoE (Stable LatentMoE); 896 routed experts (16 selected/token + 2 shared); 93 layers (69 KDA linear-attention + 24 Gated MLA + 1 dense); hidden 7168, 96 heads; vocab ~160K (163,840 per morphllm). MXFP4 weights / MXFP8 activations (QAT). Kimi K3 License (MIT-style with $20M MaaS-revenue and 100M-MAU attribution clauses; GitHub classifies as "Other"). K3.1 Pro later swapped Gated MLA for Gated DSA.

### Raw benchmarks found

> Official GitHub README / kimi.ai blog values are vendor-reported (max effort); independent values (Artificial Analysis, apidog, morphllm) are named. Absent benchmarks are marked "no verified public score found" — never invented.

Agent / tool use:

- GDPval-AA v2 (**Elo**): **1686** (vendor GitHub/morphllm) / **1668** (AA independent; above Opus 4.8 1600 and GPT-5.5 1494, below Fable 5 1760 and the ~1750 top-band anchor)
- Terminal-Bench 2.1: **88.3** (vendor, Kimi Code harness; meets the 88%+ anchor) / **84%** Terminal-Bench v2 (AA independent, Kimi Code CLI)
- BrowseComp: **91.2** (with 300K compaction) / 90.4 (without context management) (vendor)
- OSWorld-Verified: **84.8** (vendor); OSWorld 2.0: **58.3** (vendor)
- AutomationBench-AA: **53%, #1** (AA independent) / AutomationBench **30.8** (vendor GitHub — different version/scale)
- AA-Briefcase (**Elo**): **1548** (vendor) / 1547 (AA, #2 behind Fable 5)
- Tau3-Banking (τ³): **33.4** (vendor; below the ~50% top-band anchor)
- MCP-Atlas: **84.2**; MCPMark-Verified: **94.5**; Toolathlon-Verified: **76.5**; DeepSearchQA (F1): **95.0** (vendor)
- Coding Agent Index (AA, Kimi Code CLI): **57** (AA independent; with TBv2 84%, DeepSWE 64%, SWE-Atlas-QnA 23%)
- APEX-Agents: **41.0**; Agents' Last Exam: **28.3**; OfficeQA Pro: **63.3**; JobBench: **54.3** (vendor)
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (vendor; clears the 90%+ top-band anchor)
- HLE-Full (Humanity's Last Exam): **43.5%** no tools / **56.0%** with tools (vendor; clears the 40%+ anchor)
- Artificial Analysis Intelligence Index: **57, #3 at launch** (AA official, Jul-2026 vintage; comparable to Opus 4.8 / GPT-5.5, behind Fable 5 / GPT-5.6 Sol). Rebased to **44** on Index v4.3 (Sept-2026, morphllm) / 43.6 (cited in AA's Oct K3.1 Pro article). See conflicts.
- MathVision: **94.3** no tools / **97.8** with Python (vendor); AA-LCR: **74.7**; CritPt: **23.4** (vendor)
- AA-Omniscience: accuracy **46%** (up from 33%), hallucination **51%** (up from 39%), net score +18 (from +6) (AA independent)
- AIME / ARC-AGI / LCR / MLCR: **no verified public score found** (not in official table)

Coding:

- DeepSWE: **67.5** (vendor, Kimi Code harness) / **67.3** (official leaderboard, mini-SWE-agent) / **64** (AA independent) — below the 74%+ top-band anchor
- FrontierSWE: **81.2** (vendor); ProgramBench: **77.8** (vendor)
- SciCode: **58.7** (vendor; clears the 55%+ anchor)
- SWE-Marathon: **42.0**; Kimi Code Bench 2.0 (internal): **72.9**; MLS-Bench-Lite: **48.3**; PostTrainBench: **36.6** (vendor)
- SWE-Atlas-QnA: **23%** (AA independent — weak)
- SWE-bench Verified: **no verified public score found** — unpublished; apidog explicitly warns any precise K3 SWE-bench % is vendor-run or estimated
- LiveCodeBench / Vibe Code Bench: **no verified public score found**

Multimodal (image + video):

- MMMU-Pro: **81.6** no tools / **83.4** tools (vendor)
- Video-MME: **90.0** (vendor — native video); MMVU: **82.1**; WorldVQA ForceAnswer: **51.0**
- OmniDocBench: **91.1** (document); CharXiv RQ: **84.8 / 91.3**; MathVision: **94.3 / 97.8**; BabyVision: **85.7**; PerceptionBench: **58.5**; ZeroBench pass@5: **23.0 / 41.0** (vendor)
- Audio input benchmarks: **no verified public score found** (audio not supported)

Long context:

- 1,048,576-token window (1M) verified. **No long-context retrieval accuracy (MRCR/RULER/GraphWalks) at 512K+ published** (apidog: full-1M quality lacks published scores) — cannot confirm ≥98% retrieval, so Context is capped below 100.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and NEVER included.

- **Tool use: 89/100.** Terminal-Bench 2.1 88.3 (vendor) meets the 88%+ anchor; BrowseComp 91.2, OSWorld-Verified 84.8, AutomationBench-AA #1 (53%), AA-Briefcase #2 (1548) and MCP-Atlas 84.2 confirm strong agentic capability. Capped below 90 by GDPval-AA 1668–1686 (under the ~1750 anchor), Tau3-Banking 33.4 (under 50%), and weaker independent runs (AA TBv2 84%, SWE-Atlas-QnA 23%).
- **Reasoning: 87/100.** GPQA Diamond 93.5% and HLE-Full 43.5%/56.0% clear the 90%+/40%+ anchors; MathVision 97.8 and Intelligence Index #3 at launch (57) are strong. Capped by the current v4.3 Index rebase (44, below the 60+ anchor), HLE-Full below successor K3.1 Pro's 51.1, and no published AIME/ARC-AGI.
- **Context window: 95/100.** 1M tokens (1,048,576) verified, placing it in the ≥1M = 95–100 tier. Held at 95 (not 100) because no ≥98% retrieval accuracy at 512K+ is published.
- **Multimodal: 85/100.** Text + image + native video in → text out (Video-MME 90.0, MMVU 82.1), plus strong document (OmniDocBench 91.1) and math-vision (MathVision 97.8). Per the +video/PDF = 75–90 band; no audio input keeps it below the 90–100 tier.
- **Coding: 89/100.** Terminal-Bench 2.1 88.3 meets the 85%+ anchor and SciCode 58.7 clears 55%; FrontierSWE 81.2 and ProgramBench 77.8 are strong. Capped by DeepSWE 67.5 (below the 74% anchor), unpublished SWE-bench Verified, weak SWE-Atlas-QnA 23%, and independent AA runs (DeepSWE 64, TBv2 84) below vendor figures.
- **Cost efficiency: 60/100.** First-party $3 in / $15 out maps to the $3/$15≈60 anchor (flat at any context length, 90% cache discount to $0.30). Open weights (MIT-style license) allow free self-host, but the hosted price point sets the score.
- **Overall Score: 89.0/100.** Mean of (89 + 87 + 95 + 85 + 89) = 445 / 5 = 89.0. Best fit: open-weight frontier agentic + multimodal (native video) workhorse for browsing, computer use and coding at #3-launch intelligence — strong where self-hosting and video understanding matter, with terminal/science-coding gaps vs the closed frontier.

### Conflicting-results notes

- **AA Intelligence Index vintage (resolved):** AA's official launch article reports **57, #3** (Jul-2026 vintage, comparable to Opus 4.8 / GPT-5.5). After AA rebased the Index, K3 reads **44** (v4.3, Sept-2026, morphllm) / 43.6 (cited in AA's Oct K3.1 Pro article). apidog's "57, #4 of 189" is the launch value (AA official rank is #3). The separate **Coding Agent Index is also 57** (AA LinkedIn, Kimi Code CLI) — do not conflate the two indices. The current cross-model-comparable Intelligence Index is ~44; the launch #3 (57) is the headline achievement.
- **GDPval-AA:** vendor 1686 (GitHub/morphllm) vs AA independent 1668 — ~18 Elo gap, both below Fable 5 (1760) and the ~1750 anchor.
- **DeepSWE:** vendor 67.5 (Kimi Code harness) vs official leaderboard 67.3 (mini-SWE-agent) vs AA independent 64 — harness differences; all below the 74% top-band anchor.
- **Terminal-Bench:** vendor TB2.1 88.3 (Kimi Code) vs AA independent TBv2 84 — version + harness gap; vendor meets the 88% anchor, independent slightly below.
- **AutomationBench:** vendor GitHub 30.8 vs AA AutomationBench-AA 53% (#1) — different version/scale; not a true contradiction.
- **BrowseComp:** 91.2 with 300K context compaction vs 90.4 without — context-management dependent.
- **Modalities:** the GitHub formal spec table lists text+image, but native video is confirmed by the official blog, morphllm, and benchmarked Video-MME 90.0 / MMVU 82.1. Audio is not supported. Successor K3.1 Pro's card emphasized text+image and did not list video benchmarks.
- **Vocab:** ~160K (GitHub) vs 163,840 (morphllm) — minor.
- **Hallucination:** AA-Omniscience hallucination ROSE from 39% to 51% (accuracy up 33%→46%) — a flagged reliability caveat.
- **Not published:** SWE-bench Verified (apidog explicit), AIME, ARC-AGI, LiveCodeBench — marked "no verified public score found".

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official GitHub README + kimi.ai tech blog (primary) cross-checked against Artificial Analysis launch article, morphllm, apidog and AA LinkedIn; ≥3 successful independent web searches; vendor-vs-independent and Index-vintage conflicts reconciled above. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3 — official GitHub README (MoonshotAI)](https://github.com/MoonshotAI/Kimi-K3)
  - [Kimi K3 — official Moonshot tech blog](https://www.kimi.ai/blog/kimi-k3)
  - [Artificial Analysis — Kimi K3 achieves #3 in the Intelligence Index](https://artificialanalysis.ai/articles/kimi-k3-achieves-3-in-the-artificial-analysis-intelligence-index-comparable-to-opus-4-8-and-gpt-5-5)
  - [morphllm — Kimi K3 specs, pricing & benchmarks](https://www.morphllm.com/kimi-k3)
  - [apidog — Kimi K3 benchmarks: Moonshot vs independent](https://apidog.com/blog/kimi-k3-benchmarks/)
  - [Artificial Analysis (LinkedIn) — Kimi K3 Coding Agent Index 57](https://www.linkedin.com/posts/artificial-analysis_kimi-k3-in-kimi-code-cli-scores-57-and-ranks-activity-7483996214208720897-tZw4)
  - [eigent.ai — Kimi K3 open-weight frontier model](https://www.eigent.ai/blog/kimi-k3-open-weight-frontier-model)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.