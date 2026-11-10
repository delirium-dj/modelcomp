# Kimi K3.1 Pro — findings by QoDuck

- Source: Moonshot AI (`kimi-k3.1-pro`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro
- **Short description:** Moonshot AI's open-weight, natively multimodal agentic flagship (Oct 2026), post-trained from Kimi K3 via joint RL. A 2.8T-parameter MoE (104B active) tuned for long-horizon tool use, coding and document/visual reasoning; strongest open-weight agentic model at launch, with measurable gaps in pure science/program-synthesis benchmarks vs. the closed frontier.
- **Provider / access:** First-party Moonshot platform `kimi-k3.1-pro` at `https://platform.kimi.ai` (OpenAI- and Anthropic-compatible Chat Completions). Open weights on Hugging Face `moonshotai/Kimi-K3.1-Pro`; also served on OpenRouter `moonshotai/kimi-k3.1-pro`. Self-hostable under the Kimi K3.1 Pro License.
- **Release / knowledge:** Released 2026-10-23. Knowledge cutoff not stated on the model card (predecessor K3 lineage; treat as provisional, not verified).
- **IDs:** `moonshotai/Kimi-K3.1-Pro` (HF), `kimi-k3.1-pro` (Moonshot API), `moonshotai/kimi-k3.1-pro` (OpenRouter). No separate "Free" ID — open weights are free to download, hosted inference is paid.
- **Context window:** 1,048,576 tokens (1M) total, verified from the official HF model card. Max output tokens not stated on the card (no verified public figure); independent AA reporting notes ~55K output tokens consumed per Intelligence-Index task (14% more than K3's ~48K), which is a usage observation, not a hard output cap.
- **Modalities:** Text + image in → text out (MoonViT-V2 vision encoder, 401M). No native audio or video input on the card. Reasoning: yes (`reasoning_effort` low/high/max, default max). Tool calls: yes (agentic, native). JSON mode: supported via the OpenAI-compatible API.
- **Pricing (as of 2026-11-10):** $2.00 in / $10.00 out / $0.20 cached per 1M tokens (Moonshot first-party, Oct-2026 listing; AA notes first-party pricing ~33% below K3). Open weights free to self-host (compute cost only). No data-usage caveat published for the paid API beyond standard terms.
- **Architecture:** 2.8T total / 104B active MoE; 93 layers (1 dense), 69 KDA + 24 Gated DSA attention heads, 896 experts (16 selected/token + 2 shared), 160K vocab. MXFP4 weights / MXFP8 activations (QAT), SiSU-GLU. Replaces K3's Gated MLA with Gated DSA for long-context efficiency. Open weights under the Kimi K3.1 Pro License.

### Raw benchmarks found

> Values below are from the official Hugging Face model card (max reasoning effort) unless an independent source is named. Benchmarks absent from the card are marked "no verified public score found" — never invented.

Agent / tool use:

- GDPval-AA v2.1 (**agentic Elo**): **1846** (HF card; near Claude Opus 5.5's 1866, elite tier)
- Automation Bench-AA (**agentic**): **73.3** (HF card)
- OSWorld V2.1 (**computer use**): **79.6** (HF card)
- BrowseComp (**browsing**): **92.1** (HF card)
- HLE-Full with tools (**agentic reasoning**): **70.0** (HF card)
- APEX-Agents (**agentic**): **69.4** (HF card)
- Agents' Last Exam: **43.2 (ALL) / 44.2 (CLI)** (HF card)
- OfficeQA Pro v2: **64.4 / Pro 67.4** (HF card)
- GDP.pdf with python: **85.7** (HF card)
- AA-Briefcase v1.1 (**Elo**): **1678** (HF card)
- Terminal-Bench 4.0: **65.7** (HF card). Independent askclash reports Terminal-Bench **67.2%** — version/harness differs (see conflicts).
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **94.2%** (HF card; clears the 90%+ top-band anchor)
- HLE-Full (no tools): **51.1%** (HF card; clears the 40%+ anchor)
- HLE-Diamond: **39.4%** (HF card)
- Artificial Analysis Intelligence Index: **55.1 / #4 at launch** (independent AA; up from K3's 43.6, below the Index 60+ top-band anchor)
- TB-Science 0.1: **38.1** (HF card; trails GPT-6 Astra 68.1 / Opus 5.5 63.3 — a flagged science gap)
- Frontier Finance: **58.6** (HF card); Harvey Legal: **23.7** (HF card)
- LCR / MLCR / CritPt / AIME / ARC-AGI: **no verified public score found** (not on card)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- DeepSWE v1.1: **75.5** (HF card; clears the 74%+ top-band anchor)
- BenchCAD with tools: **92.7** (without tools 72.8) (HF card)
- SWE Marathon v1.1: **51.7** (HF card)
- Kimi Code Bench 2.0 (internal): **77.1** (HF card; vendor-internal, provisional)
- PostTrain Bench v1.2: **36.5** (HF card)
- Program Bench: **31.5** (HF card; behind Fable 5.1 53.5 / Astra 50.0 / Opus 5.5 65.0 — a flagged synthesis gap)
- SWE-bench Verified / SWE-Pro: **no verified public score found** (not on card)
- LiveCodeBench / SciCode / AA-SciCode / Vibe Code Bench: **no verified public score found**

Multimodal (image):

- MMMU-Pro: **84.1** (with python 90.0) (HF card)
- CharXiv Reasoning: **89.0** (with python 93.4) (HF card)
- PerceptionBench: **68.3** (HF card); ZeroBench pass@5: **39.0** (HF card)
- GDP.pdf (no tools): **34.6** (HF card)

Cyber (self-reported, HF card):

- ExploitBench: **74.7**; ExploitGym: **20.7** (trail Claude 83.0/30.4 and Astra 100/42.4)

Long context:

- 1M-token window (1,048,576) verified from card; Gated DSA attention added for long-context efficiency. **No long-context retrieval accuracy (MRCR/RULER/GraphWalks) at 512K+ reported** — cannot confirm ≥98% retrieval, so Context is capped below 100.

### Normalized scores (1–100)

> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. Cost efficiency is scored independently and NEVER included.

- **Tool use: 92/100.** GDPval-AA 1846 clears the ~1750 top-band anchor (near Opus 5.5's 1866); Automation Bench-AA 73.3, OSWorld 79.6, BrowseComp 92.1 and HLE-Full-w/tools 70.0 confirm elite agentic capability. Capped below the high-90s because Terminal-Bench is reported on v4.0 (65.7), not the TB2.1 88% anchor, and no Tau3 score is published.
- **Reasoning: 88/100.** GPQA Diamond 94.2% and HLE-Full 51.1% both clear the 90%+/40%+ top-band anchors, but AA Intelligence Index 55.1 (#4, below the 60+ anchor) and TB-Science 38.1 (a flagged science gap vs. Astra/Opus) cap it below 90.
- **Context window: 95/100.** 1M tokens (1,048,576) verified, placing it in the ≥1M = 95–100 tier; Gated DSA improves long-context efficiency. Held at 95 (not 100) because no ≥98% retrieval accuracy at 512K+ is published.
- **Multimodal: 68/100.** Text + image in → text out (MoonViT-V2); strong image understanding (MMMU-Pro 84.1, CharXiv RQ 89.0). Per the +image = 60–70 band; no native video/audio/PDF input keeps it at the image-only tier.
- **Coding: 90/100.** DeepSWE v1.1 75.5 clears the 74%+ top-band anchor; BenchCAD-w/tools 92.7 and SWE Marathon 51.7 support strong real-world coding. Capped at the band floor by Program Bench 31.5 (weak synthesis) and the absence of a published SWE-bench Verified score.
- **Cost efficiency: 72/100.** $2 in / $10 out per 1M sits between the $3/$15≈60 and $1.25/$4.25≈88 anchors; open weights (free self-host) add value beyond the hosted price point.
- **Overall Score: 86.6/100.** Mean of (92 + 88 + 95 + 68 + 90) = 433 / 5 = 86.6. Best fit: elite open-weight agentic + coding workhorse (long-horizon tool use, document/visual reasoning, self-hostable) where pure science/program-synthesis frontier gaps are acceptable.

### Conflicting-results notes

- **Terminal-Bench version:** HF card reports Terminal-Bench **4.0 = 65.7**; independent askclash reports Terminal-Bench **67.2%** (overall 66.8, rank #9). These are different benchmark versions/harnesses, not a true contradiction — the card's TB4.0 is authoritative for this model; askclash's figure is a separate harness vintage.
- **Intelligence Index vintage:** AA Index **55.1 (#4 at launch)** is the current independent holistic measure; the predecessor K3 scored 43.6, so K3.1 Pro is a large jump but still sits below the closed-frontier #1–#3 (Index 60+). Vendor card emphasizes per-benchmark wins (GPQA 94.2, GDPval 1846) while AA's composite ranks it #4 — both are consistent once the science/program gaps are weighted.
- **Pricing:** $2/$10/$0.20 is the Oct-2026 Moonshot first-party listing (myclaw/Moonshot); AA frames it as ~33% below K3. OpenRouter third-party pricing may differ slightly; first-party figure used here.
- **Max output / cutoff:** neither is stated on the card; AA's ~55K output-token observation is usage telemetry, not a verified hard cap, so it is not scored as one.
- **Self-reported cyber:** ExploitBench 74.7 / ExploitGym 20.7 are vendor-card numbers (no independent reproduction found); treated as provisional and not used to inflate Tool/Coding.

---

## Signature

- Provided by: **QoDuck (Qoder agent)** — 2026-11-10
- Method: public internet research — official Hugging Face model card (primary) cross-checked against Artificial Analysis launch analysis, OpenRouter, Moonshot platform docs and independent leaderboards (askclash); ≥3 successful independent web searches; conflicting vendor-vs-independent results reconciled above. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K3.1 Pro — official Hugging Face model card](https://huggingface.co/moonshotai/Kimi-K3.1-Pro)
  - [Artificial Analysis — Kimi K3.1 Pro launch benchmarks](https://artificialanalysis.ai/articles/kimi-k3-1-pro-launch-benchmarks)
  - [Moonshot Kimi blog — K3 lineage](https://kimi.ai/blog/kimi-k3)
  - [OpenRouter — moonshotai/kimi-k3.1-pro](https://openrouter.ai/moonshotai/kimi-k3.1-pro)
  - [MindStudio — Kimi K3.1 Pro model card summary](https://mindstudio.ai/blog/kimi-k3-1-pro-model-card)
  - [myclaw — Kimi K3.1 Pro pricing/specs](https://myclaw.ai/blog/kimi-k3-1-pro)
  - [askclash — Kimi K3.1 Pro leaderboard](https://askclash.ai/ai-leaderboard/kimi-k3-1-pro)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.