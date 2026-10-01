# Hy3 — findings by Space Bunny Alpha

- Source: Tencent Hy Team (`tencent/Hy3`, Tencent Cloud TokenHub)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Correction to my own earlier report.** A previous Space Bunny Alpha file for this
> slug scored it **52.6/100**. Re-researched 2026-10-01, it scores **70/100**. The
> earlier figure appears to have leaned on the modest Artificial Analysis composite
> (25.3, 79th percentile) without weighting **Terminal-Bench 2.1 at 90.4%**, which is a
> frontier-tier agentic result in its own right. The revision is recorded rather than
> quietly replaced.

## Model card

- **Name:** Hy3 (Tencent Hunyuan Hy3 series; successor to Hy3 Preview)
- **Short description:** Tencent's open-weight **hybrid fast-and-slow-thinking MoE** model, officially released **2026-07-06** after a late-April preview. Tencent's claim is unusually specific for an open release: it "outperforms similar-size models and **rivals flagship open-source models with 2–5x parameters**," and they say so with **21B active parameters**. Two independent evaluations support the productivity claim more directly than any benchmark does — a **blind evaluation with 270 experts using tasks from their own work** scored Hy3 **2.67/4 against GLM-5.1's 2.51/4**, with the advantage "most substantial in frontend development, data & storage, and CI/CD tasks"; and internally at WorkBuddy, **task success rate rose from 72% (preview) to 90%** with **average completion time down 34%**. Against the preview specifically, Tencent reports **agent and coding gains of 20–30%**, a **hallucination rate cut from 12.5% to 5.4%**, and **commonsense error rates nearly halved**. Not a variant or alias of another entry in this dataset.
- **Provider / access:** **Tencent Cloud TokenHub** (official), plus **Novita AI**, **DeepInfra**, **Router**, **Hermes**, **Kilo**, **Cline**, **OpenClaw**, **OpenCode** and **Cherry**. **Open weights on Hugging Face, ModelScope, GitHub and AtomGit under Apache 2.0.** Already powers Tencent's own **WorkBuddy / CodeBuddy** and **Yuanbao**.
- **Release / knowledge:** officially released **2026-07-06**; preview in late April 2026. Knowledge cutoff not published.
- **IDs:** `tencent/Hy3` (Hugging Face), `Tencent-Hunyuan/Hy3` (GitHub).
- **Context window:** **256K tokens** (first-party — Tencent's GitHub and Hugging Face model cards both state "Context Length: 256K"; Artificial Analysis independently records 256k). **Max output: 131K tokens** (Puter). **Discrepancy flagged:** Requesty and llm-stats list the window as 262K, and Puter's own FAQ states 203K. The first-party 256K is used here.
- **Modalities:** **text in; text out.** Artificial Analysis is explicit — "The model supports text input, outputs text" — and Requesty agrees. **No image, audio or video input.** This is the single largest constraint on the model and it is why the Overall sits where it does. Three reasoning modes (fast / slow / hybrid thinking) via the MoE fast-slow-thinking design.
- **Architecture:** **Mixture-of-Experts, open weights, Apache 2.0** — fully specified first-party, which is rare and worth recording in full. **295B total parameters, 21B activated per token**, plus **3.8B MTP-layer parameters**. **80 layers** excluding the MTP layer, **1 MTP layer**, **64 attention heads (GQA, 8 KV heads, head dim 128)**, **hidden size 4096**, **intermediate size 13312**, **vocabulary 120,832**, **192 experts with top-8 activated**, **BF16 precision**. Artificial Analysis records 299B total (a rounding of the 295B + 3.8B MTP figure).
- **Self-hosting:** Tencent recommends **8 GPUs, H20-3e or other large-memory cards**, for the full model.
- **Pricing (as of 2026-10-01):** **Tencent first-party: ¥1 / ¥4 / ¥0.25 per 1M** (input / output / cached input) — approximately **$0.13 / $0.53 / $0.03**. Third-party: Novita AI $0.14 / $0.58 / $0.04; DeepInfra $0.14 / $0.58 / **$0.035**. Artificial Analysis blended rate at 7:2:1 cache-hit/input/output: **$0.11 / MTok**. Artificial Analysis's verdict: "**very competitive**" on both input (median $0.47) and output (median $1.69). Tencent notes it "further reduced the API price" through hardware-software co-optimisation.
- **Token efficiency, measured:** versus GLM-5.2 on common tasks, Hy3 used **47.4% fewer tokens for document processing** and **49% fewer for presentation creation**.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.1: 90.4%** (harborframework, via Tencent's Hugging Face evaluation table) — **the highest Terminal-Bench 2.1 figure in this dataset**, and a frontier-tier number by the methodology's own anchor (TB2.1 ~88%+ → 90–100).
- Search-agent benchmarks **BrowseComp** and **WideSearch** are cited by Tencent Cloud as mainstream results improved, but **no numeric values were recoverable** for either.
- **SWE-bench Verified accuracy variance across scaffoldings stays within 4 percentage points** (CodeBuddy, Cline, KiloCode) — Tencent frames this as a reliability result: "Stability of tool calls and output formats… we fixed multiple baseline reliability issues, bringing the model to production-grade standards across tool configurations and output constraints. Tool-call error recovery and overall efficiency improved. Hy3 also generalizes across different agent scaffolds."
- **Multi-turn reliability, measured internally:** the issue rate on comprehensive multi-turn tests dropped from **17.4% to 7.9%** after joint SFT + RL optimisation, targeting coreference resolution, ellipsis recovery and multi-turn constraint inheritance.
- **Blind expert evaluation, 270 experts, own work tasks: 2.67/4** vs GLM-5.1 **2.51/4**.
- **Internal WorkBuddy: task success 72% → 90%**, average completion time **−34%**.
- Terminal-Bench 2.0 / Tau3-Banking / Tau2-Bench / GDPval-AA / Toolathlon / Claw-Eval / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- **GPQA Diamond: 89.7%** (Puter) / **90.4%** (Tencent's evaluation table) — either reading clears the methodology's mid-band and sits just under the 90%+ frontier threshold
- **Humanity's Last Exam: 33.5%** (Puter)
- **LCR (long-context reasoning): 79.0%** (Puter)
- **Artificial Analysis Intelligence Index: 25.3** — "**better than 79% of tracked models**," with a peer median of 18 among comparable open-weight models of similar size. AA notes Hy3 generated **170M tokens** on the Index, "somewhat verbose" against a 140M median.
- **Hallucination rate: 5.4%, down from 12.5%** on the preview (Tencent-reported) — a **57% relative reduction**, and a directly relevant number given AA's Omniscience findings on comparable models.
- FrontierMath / ARC-AGI / CritPt / AIME 2025 / AA-Omniscience: **no verified public score found**

Coding:

- **SWE-bench Verified: 78%** (Puter)
- **SWE-bench Pro (ScaleAI): 57.9%** (Tencent's evaluation table) — the contamination-resistant four-language harness, where this is a genuinely competitive figure
- **SWE-bench Multilingual: 75.8%** (mercor, via Tencent's table)
- **SciCode: 48.6%** (Puter)
- **SkillsBench V1.1** is listed in Tencent's evaluation table without a recoverable value.
- Coding gains of **20–30% versus the preview** (Tencent-reported).
- LiveCodeBench / DeepSWE / Aider Polyglot / Vibe Code Bench: **no verified public score found**

Long context:

- **LCR: 79.0%** (Puter) at the 256K window — a genuine retrieval measurement, and one of the few models in this dataset with one.
- Tencent reports Hy3 "improved markedly on long-dialogue evals like **MRCR**," but **no MRCR value was recoverable**, and no RULER or GraphWalks figure was found.

### Normalized scores (1–100)

- **Tool use: 87/100.** The strongest dimension and the one the earlier version of this file under-weighted most. **Terminal-Bench 2.1 at 90.4%** is a frontier-tier result on the exact harness the methodology anchors this dimension to (TB2.1 ~88%+ → 90–100), and it is the highest Terminal-Bench 2.1 figure recorded anywhere in this dataset. Around it sits a body of reliability evidence that is rarer than any single score: **SWE-bench Verified varying within 4 points across three unrelated agent scaffolds** (CodeBuddy, Cline, KiloCode), tool-call error recovery explicitly fixed, **multi-turn issue rate cut from 17.4% to 7.9%**, and a **blind 270-expert evaluation on real work tasks at 2.67/4**. Held at 87 rather than 92+ because **BrowseComp and WideSearch carry no recoverable numbers**, no Tau3-Banking, Toolathlon or Claw-Eval figure exists, and the expert-blind and WorkBuddy evaluations are Tencent-run on Tencent's own tasks — strong evidence of productivity, not of general agentic capability.
- **Reasoning: 82/100.** Strong. **GPQA Diamond 89.7–90.4%** sits at or just past the methodology's 90% frontier threshold, **HLE 33.5%** clears the "HLE 40%+" reference's lower neighbourhood and is far above the sub-10% floor most models in this dataset occupy, and **LCR 79.0%** shows real long-context reasoning. Two things keep it out of the high 80s: the **Artificial Analysis Intelligence Index of 25.3 is modest in absolute terms** — strong for its size and price class, but well below the 30–39 band where the GPT-5.4/5.5 flagships sit — and there is **no FrontierMath, ARC-AGI or CritPt figure** to test reasoning breadth against. Worth crediting explicitly: the **hallucination rate cut to 5.4%** is a knowledge-reliability claim that most models in this dataset cannot make at all.
- **Context window: 80/100.** **256K context with 131K max output**, in the methodology's 200K–500K band and scored in its upper half because **LCR at 79.0% is a real retrieval measurement** behind the spec — which distinguishes this model from most in this dataset, where a large window is a spec and nothing else. **Multi-head Latent-style KV-cache headroom is not the relevant detail here**; what is, is that the 262K-vs-256K-vs-203K discrepancy across trackers is unresolved and no first-party max-output figure appeared in the sources reviewed beyond Puter's 131K. Not scored into the 500K–1M band: 256K is 256K, however good the retrieval is at that length.
- **Multimodal: 15/100.** **Text in; text out, with no image, audio or video input.** Artificial Analysis states this directly and Requesty corroborates it; no Tencent source claims otherwise. This is the dataset's standard text-only floor, and it is the single biggest reason Hy3's Overall is not higher despite frontier-tier agentic and coding numbers. Any pipeline that reads a screenshot, a diagram or a PDF natively cannot use this model.
- **Coding: 84/100.** Strong across every axis that has a number. **SWE-bench Verified 78%** is comfortably frontier-adjacent, **SWE-bench Pro 57.9%** on the harder contamination-resistant four-language harness is genuinely competitive against models several times its active-parameter count, and **SWE-bench Multilingual 75.8%** adds breadth most models lack. **SciCode 48.6%** is mid-range and is what keeps this from the high 80s — the methodology's own mid-band note is "LiveCode 80% but Vibe <10% and SciCode <40% → 65–75," and Hy3 sits above that band on SciCode while being well clear of it on SWE-bench. The **20–30% coding gain over the preview** is Tencent-reported. No LiveCodeBench, DeepSWE or Aider Polyglot figure was found.
- **Cost efficiency: 98/100.** **$0.13 / $0.53 per MTok first-party, cached input $0.03, Artificial Analysis blended $0.11/MTok** — against peer medians of $0.47 input and $1.69 output, which AA calls "very competitive" twice over. This is the **cheapest serious open-weights model in this dataset by a wide margin**, and it is cheaper than most *paid* frontier models: below GPT-5 nano's $0.05/$0.40 only on input, and far below GPT-5.4 nano's $0.20/$1.25 on output while matching it on benchmarks Hy3 wins. The **$0.03 cached input** is the number that governs a real agent loop. Two credits keep it from 100: the **170M output tokens on the AA Index — "somewhat verbose" against a 140M median** — which means a thinking-heavy workload pays for tokens it does not need, and third-party routes carry a small premium over Tencent's own.
- **Overall Score: 70/100.** (87 + 82 + 80 + 15 + 84) / 5 = 69.6 → **70**. Best fit: **self-hosted or high-volume coding agents and long-context text pipelines** — Terminal-Bench 2.1 at 90.4%, SWE-bench Pro at 57.9%, a **256K window with 79% LCR**, and **$0.13/$0.53 with $0.03 cached**, under an **Apache 2.0** licence that lets you serve it yourself on 8 large-memory GPUs. Tencent's own productivity evidence is the strongest argument for it: a 270-expert blind evaluation on real work tasks, 90% internal task success, 34% faster completion, and 47–49% fewer tokens than GLM-5.2. **The binding constraint is text-only** — no image, audio or video input — so this is not a model for screenshot-driven debugging, diagram reasoning or native PDF analysis; route those elsewhere. If you need frontier-composite intelligence rather than frontier agentic and coding performance, note that the AA Index of 25.3 trails the GPT-5.4/5.5 flagships, and this model is a **21B-active** specialist rather than a general reasoning leader.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research, **second pass, superseding this agent's own earlier 52.6/100 report for the same slug.** Sources: Tencent's official model card (`Tencent-Hunyuan/Hy3` on GitHub and `tencent/Hy3` on Hugging Face) for the complete first-party architecture specification, the 256K context, the Apache 2.0 licence and the hosted evaluation table carrying Terminal-Bench 2.1 at 90.4%, SWE-bench Pro at 57.9% and SWE-bench Multilingual at 75.8%; Tencent's Hy research page (`hy.tencent.com/research/hy3`) for the ¥1/¥4/¥0.25 pricing, the 270-expert blind evaluation at 2.67/4 against GLM-5.1, the WorkBuddy 72%→90% task-success and −34% completion-time results, the 47.4%/49% token-efficiency figures, the multi-turn issue-rate drop from 17.4% to 7.9%, the hallucination reduction from 12.5% to 5.4% and the scaffold-variance-within-4-points result; Tencent Cloud Techpedia for the release chronology, the hybrid fast-and-slow-thinking description and the third-party platform list; Artificial Analysis's Hy3 page for the Index of 25.3, the 299B/21B parameters, the text-only modality confirmation, the peer-median pricing comparison and the 170M-token verbosity note; Puter for GPQA 89.7%, HLE 33.5%, SciCode 48.6%, LCR 79.0%, SWE-bench Verified 78% and the 131K max output; Requesty and llm-stats for provider routes and rates. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. The context-window discrepancy across trackers (256K first-party vs 262K vs 203K) is flagged rather than resolved by assertion, and every Tencent-run internal evaluation is labelled as such.
- Future sources: add a new file next to this one, e.g. `Hy4.md`, using the same headings. Re-score if a **vision or PDF modality** is added — that single change would move the Multimodal line from 15 to at least 70 and the Overall by roughly 11 points, which is by far the largest available swing in this file.