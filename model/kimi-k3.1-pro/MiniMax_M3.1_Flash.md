# Kimi K3.1 Pro — findings by MiniMax M3.1 Flash

- Source: Moonshot AI (`kimi-k3.1-pro`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3.1 Pro (Moonshot AI) — the Pro tier of the new K3.1 series; a post-trained Kimi K3. The sibling `kimi-k3.1-pro-highspeed` is the same weights on a faster serving profile, not a separate model.
- **Short description:** Moonshot AI's flagship open-weight (weights promised, not yet published at launch) multimodal reasoning model, released 2026-10-23, targeting long-horizon coding agents, 3D/CAD generation and financial research. Post-trained from Kimi K3 on the same 2.8T MoE base with substantially larger post-training compute.
- **Provider / access:** Kimi API platform (`kimi-k3.1-pro`, OpenAI-compatible Chat Completions; `kimi-k3.1-pro-highspeed` at ~3× speed for ~2–3× the input price); OpenRouter (`moonshotai/kimi-k3.1-pro`); consumer surfaces Kimi.ai / Kimi mobile apps, Kimi Work (desktop app 3.1.0+), Kimi Code. Batch inference is billed at 60% of standard price.
- **Release / knowledge:** 2026-10-23; full model weights announced for release by 2026-11-04. Knowledge cutoff not published.
- **IDs:** `kimi-k3.1-pro`, `kimi-k3.1-pro-highspeed` (Kimi API), `moonshotai/kimi-k3.1-pro` (OpenRouter). No free API ID.
- **Context window:** 1,048,576 tokens (1M) — stated by the Kimi API pricing docs for all K3-series models and confirmed by Artificial Analysis (~1,500 A4 pages). Max output not published (a third-party listing cites 131K output; not confirmed in vendor docs).
- **Modalities:** input text and image (native vision on the K3 architecture); output text; reasoning model; tool calls and long-horizon agent loops; no audio/video input and no non-text output.
- **Pricing (as of 2026-10-30):** $2.00 input / $10.00 output / $0.20 cached input per 1M tokens (Kimi API pricing page) — 33% below Kimi K3 on all three rates; Highspeed variant $4.00 input per 1M; Batch API at 60% of standard price. Pay-as-you-go, no subscription; Kimi membership plans cover the consumer apps, not the API.
- **Architecture:** 2.8T total parameters, 104B active (MoE, Kimi Delta Attention + Attention Residuals) — per Artificial Analysis; open-weight release announced but weights not published at launch date of this report.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **67.2%** (Artificial Analysis leaderboard, mini-swe-agent harness) — **highest of any model measured**; Moonshot's own run with the Claude-Code harness reports **65.7%** vs GPT-6 Astra 58.2% and Claude Opus 5.5 66.4% (Artificial Analysis launch article rounds it to 67%, up from 13% for Kimi K3)
- GDPval-AA v2.1: **1,846 Elo** — **#3** overall, up 312 Elo from Kimi K3; behind Claude Opus 5.5 (1,866) and Muse Wonder Full (1,857)
- AutomationBench-AA: **73%** (up from 58% for Kimi K3)
- AA Coding Agent Index / Tau3 / Tau2 / Claw-Eval: no verified public score found
- BrowseComp, OSWorld V2.1, Agents' Last Exam, BioMysteryBench, HANDBOOK.md, OfficeQA Pro v2: evaluated by Moonshot in its launch post (with Claude-Code and Kimi Agent harnesses) — no verified public numeric score found in the fetched text for this model

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **55 (v4.3, at launch — #4 overall, +11 over Kimi K3 at 44)** / **46 (v5.0 on the current model page, class median 38)**; the launch ranking put it behind Opus 5.5 (58), Sonnet 5.5 (56) and Muse Wonder Full (56)
- Humanity's Last Exam: **52%** (up from 47% for Kimi K3; full 2,500-question set)
- CritPt: **25%** (up from 23%)
- SciCode: **61%** (up from 59%)
- AA-Omniscience: **index 30** (up from 20) — accuracy 51% (up from 48%), **hallucination rate 44%** (down from 53%)
- LiveBench 2.0: **71.3** (livebench.ai leaderboard)
- GPQA Diamond / LCR / MLCR: no verified public score found for this exact model

Coding:

- Terminal-Bench 4.0: **67.2%** / **65.7%** (see agentic section — best-in-class on both harnesses)
- Kimi Code Bench 3.0 Long-horizon (Moonshot internal, Claude-Code harness): **61.2%** (Kimi K3: 55.95%)
- BenchCAD (3D reconstruction → CAD code, with tools): **92.7%** vs Claude Opus 5.5 96.2% and GPT-6 Astra 95.9%
- xdev-bench-hard (Moonshot internal, vulnerability discovery/exploitation, pass@3): **81.0%** — the unfiltered checkpoint reached 90.5%, the shipped model 81.0% after cyber-related data removal
- DeepSWE 1.1 / SWE-Marathon v1.1 / ProgramBench (binary): evaluated by Moonshot with the Claude-Code harness, peer scores cited from official leaderboards — no verified public numeric score found for this model in the fetched material
- SWE-bench Verified / LiveCodeBench: no verified public score found for K3.1 Pro (the 76.8% SWE-bench Verified figure in circulation belongs to the earlier Kimi K3)

Long context:

- 1M context is vendor-documented (Kimi API docs, Artificial Analysis) and Moonshot evaluated K3 (not K3.1 Pro) with a 1M window and no context management at 90.4 — but **no MRCR / RULER retrieval figure exists for K3.1 Pro**.

### Normalized scores (1–100)

- **Tool use: 92/100.** Best-in-class terminal agent: Terminal-Bench 4.0 67.2% on Artificial Analysis's harness (and 65.7% on Moonshot's Claude-Code harness) — ahead of Sonnet 5.5 (64%), Opus 5.5 (66.4%) and GPT-6 Astra (58.2%) — plus GDPval-AA at 1,846 Elo (#3) and AutomationBench-AA 73%. Capped below the ceiling by no public Tau3/Tau2, Claw-Eval or AA Coding Agent Index number, and by an output speed of only 33 tok/s (rank #194/196) that makes real agent loops slow in wall-clock terms.
- **Reasoning: 80/100.** AA Intelligence Index 55 at launch (#4 overall, behind only Opus 5.5 / Sonnet 5.5 / Muse Wonder Full) but 46 on the current v5.0 methodology; HLE 52% and SciCode 61% are strong, while CritPt 25% and an AA-Omniscience hallucination rate of 44% (vs 25–30 for the Meta frontier pair) mark a real knowledge-fidelity gap — Moonshot's own internal hallucination claim (8.3%) does not transfer to the independent measurement.
- **Context window: 95/100.** 1,048,576 tokens confirmed by the Kimi API pricing docs and Artificial Analysis — top of the ≥1M tier band. Not 100 because no ≥98% retrieval-at-512K+ measurement (MRCR/RULER) exists for this model.
- **Multimodal: 70/100.** Native vision: text + image input (Artificial Analysis), with Moonshot running image/PDF-based evaluations (GDP.pdf rendered as page images, MMMU-Pro, ChartoGraphy, ZeroBench) — solid image-in behaviour, but no audio or video input and text-only output keep it in the image-in band rather than the omni band.
- **Coding: 90/100.** Terminal-Bench 4.0 at the top of the leaderboard on two independent harnesses, Kimi Code Bench 3.0 Long-horizon 61.2% (up from 55.95%), BenchCAD 92.7% close behind Opus 5.5, and xdev-bench-hard 81.0% at pass@3. Capped by the absence of any published SWE-bench Verified / LiveCodeBench number for K3.1 Pro and by the harness caveats attached to the internal Kimi benchmarks.
- **Cost efficiency: 78/100.** $2 input / $10 output / $0.20 cached with a 90% cache discount, 33% below Kimi K3, and Batch API at 60% of standard price — cheaper per token than the Meta/Anthropic frontier tier, with Artificial Analysis measuring $1.98 per Intelligence Index task at launch (and $3.68 on the current v5.0 task mix). Held back by no free API tier and by throughput: at 33 output tokens/second (rank #194/196) a finished agent task costs far more wall-clock time than the token price suggests.
- **Overall Score: 85.4/100.** Half-up mean of the five quality dims (92 + 80 + 95 + 70 + 90) / 5 = 85.4. Best fit: terminal/long-horizon coding agents and 3D/CAD generation where it leads the public leaderboard; weaker fit for knowledge-heavy factual work (hallucination rate still high) and for latency-sensitive interactive use.

### Agreement notes (conflicting readings)

- **Index version drift:** Artificial Analysis scored the model 55 at launch on Intelligence Index v4.3 (#4 overall) and shows 46 on the current v5.0 model page (v5 published 2026-10-27 with mostly private datasets). Both are cited; the v5 value is the live one.
- **Terminal-Bench harness:** 67.2% on Artificial Analysis's mini-swe-agent harness versus 65.7% on Moonshot's Claude-Code harness — the same model, two harnesses, ~1.5 points apart.
- **Cost per task:** $1.98 (v4.3 launch article) vs $3.68 (current v5.0 model page) — the index redefinition changed the task mix, not the token price.
- **Hallucination:** Moonshot's internal "Kimi Hallu Bench Hard" claim-level hallucination rate of 8.3% (down from Kimi K3's 23.4%) versus Artificial Analysis's 44% hallucination rate on AA-Omniscience — an internal stress test versus an independent broad knowledge probe; Moonshot itself warns the internal rate is not an overall error rate.
- **Open weights:** the "leading open-weights model" framing was forward-looking at launch; weights were announced for release by 2026-11-04 and were not published on the launch date.
- **Cyber capability:** the shipped model's xdev-bench-hard score (81.0%) is lower than the unfiltered checkpoint (90.5%) — a deliberate data-removal effect Moonshot documents openly.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax-m3.1-flash-preview)** — 2026-10-30
- Method: public internet research (Moonshot Kimi tech blog for K3.1 Pro, Kimi API platform pricing/quickstart docs, Artificial Analysis launch article + model page + Terminal-Bench 4.0 evaluation page, livebench.ai leaderboard, OpenRouter model docs, independent review coverage); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Kimi_K3.md`, using the same headings.
